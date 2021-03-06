import * as express from 'express';
import 'reflect-metadata';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import {METADATA_KEY, PARAMS_TYPES} from '../metadata/keys';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { MODULE_KEYS } from '../metadata/keys';
import { Handler } from './handler';
import * as bodyParser from 'body-parser';
import {PARAM} from './interfaces';
import { GuardType } from "./guards-decorators";
import { Container } from 'inversify';
import { isFunction } from 'lodash';
import {ProjectRequest, AuthRequest, ProjectAccountRequest} from '../interfaces';
import * as passport from 'passport';
import {Messages} from '../enums';

export class Server {

  private readonly port: number;
  private readonly app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.app.use(bodyParser.json());
    this.app.use(passport.initialize());
    this.registerControllers();
  }

  run() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}`);
    });
  }

  private registerControllers() {
    const modules = Reflect.getMetadata(METADATA_KEY.module, Reflect) || [];

    modules.forEach(({ type }) => {
      const controllers = Reflect.getMetadata(MODULE_KEYS.controllers, type) || {};
      const controllersList = Object.keys(controllers).map(key => controllers[key]);
      const container = Reflect.getMetadata(METADATA_KEY.container, type);

      controllersList.forEach(controller => {
        const controllerMetadata = Reflect.getMetadata(METADATA_KEY.controller, controller.type);
        const methods = Reflect.getMetadata(METADATA_KEY.controllerMethod, controller.type) || {};
        const params = Reflect.getMetadata(METADATA_KEY.controllerParams, controller.type);

        const instance = container.get(controller.type);

        const methodsList = Object.keys(methods).map(key => methods[key]);

        methodsList.forEach(({ method, handler, path, middlewares, name, validators, guards }: Handler) => {
          const methodParams = params.filter(({ methodName }) => methodName === name);
          const guardsMiddlewares = this.createGuardsMiddleware(guards, container);
          const expressHandler = this.createHandler(handler.bind(instance), methodParams);
          this.app[method](`/${controllerMetadata.path}/${path}`, ...guardsMiddlewares, ...middlewares, expressHandler);
        });
      })
    });
  }

  private createHandler(method: Function, params: any[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const args = this.createArgs(req, res, next, params);
        const result = await method(...args);
        res.send(result);
      } catch (e) {
        if(e.message) {
          res.status(e.statusCode).json(e);
        } else {
          res
              .status(INTERNAL_SERVER_ERROR)
              .json({ statusCode: INTERNAL_SERVER_ERROR, message: { error: Messages.INTERNAL_SERVER_ERROR } });
        }
      }
    }
  }

  private createArgs(req: ProjectRequest & AuthRequest & ProjectAccountRequest, res: Response, next: NextFunction, params: PARAM[]): any[] {
    if(!params || !params.length) {
      return [req, res, next];
    }

    return params.map(({ type, paramName = '' }) => {
      switch (type) {
        case PARAMS_TYPES.params:
          const param = req.params[paramName];
          if(!isNaN(Number(param))) {
            return Number(param);
          } else {
            return param;
          }

        case PARAMS_TYPES.headers:
          return req.headers[paramName];

        case PARAMS_TYPES.body:
          return req.body;

        case PARAMS_TYPES.query:
          return req.query;

        case PARAMS_TYPES.queryField:
          return req.query[paramName];

        case PARAMS_TYPES.user:
          return req.user;

        case PARAMS_TYPES.project:
          return req.project;

        case PARAMS_TYPES.projectAccount:
          return req.projectAccount;
      }
    });
  }

  private createGuardsMiddleware(guardTypes: GuardType[], container: Container): RequestHandler[] {
    return guardTypes.map((guardType: GuardType) => {
        let guard;
        if(isFunction(guardType)) {
            guard = container.get(guardType);
        } else {
            guard = guardType;
        }
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                const result = guard.check.call(guard, req, res, next);
                if(result instanceof Promise) {
                    result.catch(e => {
                        console.log('Guard error', e);
                        res.status(e.statusCode).json(e);
                    });
                }
            } catch (e) {
                console.log('Guard error', e);
                res.status(e.statusCode).json(e);
            }
        }
    });
  }
}