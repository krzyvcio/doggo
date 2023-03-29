"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserOutput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var role_constant_1 = require("../../auth/constants/role.constant");
var UserOutput = /** @class */ (function () {
    function UserOutput() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "username");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)({ example: [role_constant_1.ROLE.USER] })
    ], UserOutput.prototype, "roles");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "email");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "isAccountDisabled");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "createdAt");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], UserOutput.prototype, "updatedAt");
    return UserOutput;
}());
exports.UserOutput = UserOutput;
