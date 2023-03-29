"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserInput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var role_constant_1 = require("../../auth/constants/role.constant");
var CreateUserInput = /** @class */ (function () {
    function CreateUserInput() {
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)()
    ], CreateUserInput.prototype, "name");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.Length)(6, 100),
        (0, class_validator_1.IsAlphanumeric)()
    ], CreateUserInput.prototype, "username");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.Length)(6, 100)
    ], CreateUserInput.prototype, "password");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ArrayNotEmpty)(),
        (0, class_validator_1.IsEnum)(role_constant_1.ROLE, { each: true })
    ], CreateUserInput.prototype, "roles");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsEmail)(),
        (0, class_validator_1.MaxLength)(100)
    ], CreateUserInput.prototype, "email");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsBoolean)()
    ], CreateUserInput.prototype, "isAccountDisabled");
    return CreateUserInput;
}());
exports.CreateUserInput = CreateUserInput;
