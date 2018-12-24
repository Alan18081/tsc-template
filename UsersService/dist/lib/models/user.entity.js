"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var constants_1 = require("./constants");
var profile_entity_1 = require("./profile.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        decorators_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        decorators_1.Column(constants_1.TYPES.VARCHAR),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        decorators_1.Column(constants_1.TYPES.INT),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    __decorate([
        decorators_1.OneToOne(function () { return profile_entity_1.Profile; }),
        __metadata("design:type", profile_entity_1.Profile)
    ], User.prototype, "profile", void 0);
    User = __decorate([
        decorators_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
