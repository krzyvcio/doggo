"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var jwt_auth_strategy_1 = require("../auth/strategies/jwt-auth.strategy");
var shared_module_1 = require("../shared/shared.module");
var user_controller_1 = require("./controllers/user.controller");
var user_repository_1 = require("./repositories/user.repository");
var user_service_1 = require("./services/user.service");
var user_acl_service_1 = require("./services/user-acl.service");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository])],
            providers: [user_service_1.UserService, jwt_auth_strategy_1.JwtAuthStrategy, user_acl_service_1.UserAclService],
            controllers: [user_controller_1.UserController],
            exports: [user_service_1.UserService]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
