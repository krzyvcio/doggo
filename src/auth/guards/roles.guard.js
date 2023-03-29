"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RolesGuard = void 0;
var common_1 = require("@nestjs/common");
var role_decorator_1 = require("../decorators/role.decorator");
var RolesGuard = /** @class */ (function () {
    function RolesGuard(reflector) {
        this.reflector = reflector;
    }
    RolesGuard.prototype.canActivate = function (context) {
        var requiredRoles = this.reflector.getAllAndOverride(role_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles) {
            return true;
        }
        var user = context.switchToHttp().getRequest().user;
        if (requiredRoles.some(function (role) { var _a; return (_a = user.roles) === null || _a === void 0 ? void 0 : _a.includes(role); })) {
            return true;
        }
        throw new common_1.UnauthorizedException("User with roles ".concat(user.roles, " does not have access to this route with roles ").concat(requiredRoles));
    };
    RolesGuard = __decorate([
        (0, common_1.Injectable)()
    ], RolesGuard);
    return RolesGuard;
}());
exports.RolesGuard = RolesGuard;
