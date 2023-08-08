"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordResetModule = void 0;
const common_1 = require("@nestjs/common");
const user_password_reset_service_1 = require("./user-password-reset.service");
const user_password_reset_controller_1 = require("./user-password-reset.controller");
const email_service_1 = require("../email/email.service");
let UserPasswordResetModule = class UserPasswordResetModule {
};
UserPasswordResetModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_password_reset_controller_1.UserPasswordResetController],
        providers: [
            user_password_reset_service_1.UserPasswordResetService,
            email_service_1.EmailService,
        ],
        exports: [user_password_reset_service_1.UserPasswordResetService],
    })
], UserPasswordResetModule);
exports.UserPasswordResetModule = UserPasswordResetModule;
//# sourceMappingURL=user-password-reset.module.js.map