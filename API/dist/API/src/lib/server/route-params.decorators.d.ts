import { RequestHandler } from 'express';
import { Handler } from './handler';
export declare function UseMiddlewares(...middlewares: RequestHandler[]): (target: any, name: string, descriptor: PropertyDescriptor) => void;
export declare function Param(name: string): ParameterDecorator;
export declare function Headers(name: string): ParameterDecorator;
export declare function Body(): ParameterDecorator;
export declare function Query(name?: string): ParameterDecorator;
export declare function getHandler(target: any, name: string, descriptor: PropertyDescriptor): Handler;
