"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterInput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var role_constant_1 = require("../constants/role.constant");
var RegisterInput = /** @class */ (function () {
    function RegisterInput() {
        // These keys can only be set by ADMIN user.
        this.roles = [role_constant_1.ROLE.USER];
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MaxLength)(100),
        (0, class_validator_1.IsString)()
    ], RegisterInput.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.MaxLength)(200),
        (0, class_validator_1.IsString)()
    ], RegisterInput.prototype, "username");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Length)(6, 100),
        (0, class_validator_1.IsString)()
    ], RegisterInput.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.MaxLength)(100)
    ], RegisterInput.prototype, "email");
    return RegisterInput;
}());
exports.RegisterInput = RegisterInput;
