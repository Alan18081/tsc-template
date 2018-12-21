"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const create_user_dto_1 = require("./dto/create-user.dto");
const class_validator_1 = require("class-validator");
const http_error_1 = require("../../server/http-error");
let UsersFilter = class UsersFilter {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = new create_user_dto_1.CreateUserDto(data);
            const errors = yield class_validator_1.validate(body);
            if (errors.length) {
                const errorMessages = errors.map(({ property, constraints }) => ({
                    property,
                    constrains: Object.keys(constraints).map(key => constraints[key])
                }));
                throw new http_error_1.BadRequest({ errors: errorMessages });
            }
        });
    }
};
UsersFilter = __decorate([
    inversify_1.injectable()
], UsersFilter);
exports.UsersFilter = UsersFilter;
