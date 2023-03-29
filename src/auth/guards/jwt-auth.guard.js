"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JwtAuthGuard = void 0;
var common_1 = require("@nestjs/common");
var passport_1 = require("@nestjs/passport");
var strategy_constant_1 = require("../constants/strategy.constant");
var JwtAuthGuard = /** @class */ (function (_super) {
    __extends(JwtAuthGuard, _super);
    function JwtAuthGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JwtAuthGuard.prototype.canActivate = function (context) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return _super.prototype.canActivate.call(this, context);
    };
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    JwtAuthGuard.prototype.handleRequest = function (err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
            throw err || new common_1.UnauthorizedException("".concat(info));
        }
        return user;
    };
    JwtAuthGuard = __decorate([
        (0, common_1.Injectable)()
    ], JwtAuthGuard);
    return JwtAuthGuard;
}((0, passport_1.AuthGuard)(strategy_constant_1.STRATEGY_JWT_AUTH)));
exports.JwtAuthGuard = JwtAuthGuard;
