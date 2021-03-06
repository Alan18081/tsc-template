"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Messages;
(function (Messages) {
    Messages["INTERNAL_SERVER_ERROR"] = "Server cannot process your request, because of internal error";
    Messages["UNAUTHORIZED"] = "Unauthorized";
    Messages["USER_ALREADY_EXISTS"] = "User already exists";
    Messages["USER_NOT_FOUND"] = "User with that email doesn't exists";
    Messages["WRONG_PASSWORD"] = "Wrong password";
    Messages["INVALID_TOKEN"] = "Invalid token";
    Messages["PROJECT_TOKEN_NOT_FOUND"] = "Auth token for project is not found";
    Messages["ACCOUNT_TOKEN_NOT_FOUND"] = "Auth token for project account is not found";
    Messages["PROJECT_NOT_FOUND"] = "Project doesn't exist";
    Messages["ACCOUNT_NOT_FOUND"] = "Account doesn't exist";
    Messages["STORAGE_NOT_FOUND"] = "Storage doesn't exist";
    Messages["STORAGE_NAME_ERROR"] = "Storage with provided name already exists";
    Messages["STORAGE_PATH_ERROR"] = "Storage with provided path already exists";
    Messages["STORAGE_DATA_ALREADY_EXISTS"] = "Storage Data for provided storage already exists";
    Messages["INVALID_PERMISSIONS"] = "You don't have permissions to do this operation";
})(Messages = exports.Messages || (exports.Messages = {}));
