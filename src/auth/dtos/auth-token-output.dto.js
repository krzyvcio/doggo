"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserRefreshTokenClaims = exports.UserAccessTokenClaims = exports.AuthTokenOutput = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var AuthTokenOutput = /** @class */ (function () {
    function AuthTokenOutput() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput.prototype, "accessToken");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, swagger_1.ApiProperty)()
    ], AuthTokenOutput.prototype, "refreshToken");
    return AuthTokenOutput;
}());
exports.AuthTokenOutput = AuthTokenOutput;
var UserAccessTokenClaims = /** @class */ (function () {
    function UserAccessTokenClaims() {
    }
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "username");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserAccessTokenClaims.prototype, "roles");
    return UserAccessTokenClaims;
}());
exports.UserAccessTokenClaims = UserAccessTokenClaims;
var UserRefreshTokenClaims = /** @class */ (function () {
    function UserRefreshTokenClaims() {
    }
    return UserRefreshTokenClaims;
}());
exports.UserRefreshTokenClaims = UserRefreshTokenClaims;
