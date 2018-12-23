"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_params_decorators_1 = require("../../API/src/lib/server/route-params.decorators");
function UseValidator() {
    var validators = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        validators[_i] = arguments[_i];
    }
    return function (target, name, descriptor) {
        var method = route_params_decorators_1.getHandler(target, name, descriptor);
        method.addValidator(validators);
    };
}
exports.UseValidator = UseValidator;