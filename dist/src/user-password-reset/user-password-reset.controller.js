"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPasswordResetController = void 0;
const common_1 = require("@nestjs/common");
const user_password_reset_service_1 = require("./user-password-reset.service");
let UserPasswordResetController = class UserPasswordResetController {
    constructor(userPasswordResetService) {
        this.userPasswordResetService = userPasswordResetService;
    }
    async resetPassword(email) {
        if (!email) {
            return {
                message: 'Email is required',
            };
        }
        const userPasswordReset = await this.userPasswordResetService.resetPassword(email);
        return userPasswordReset;
    }
    async create(userId) {
        if (!userId) {
            return {
                message: 'User id is required',
            };
        }
        const userPasswordReset = await this.userPasswordResetService.create(userId);
        return userPasswordReset;
    }
    async verify(password, token) {
        if (!token) {
            return {
                message: 'Token is required',
            };
        }
        const isVeryfied = await this.userPasswordResetService.changePassword(token, password);
        if (isVeryfied) {
            return {
                message: 'Password changed',
            };
        }
        else {
            return {
                message: 'Password cannot be changed',
            };
        }
    }
};
__decorate([
    (0, common_1.Get)('resetPassword'),
    __param(0, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserPasswordResetController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('reset/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserPasswordResetController.prototype, "create", null);
__decorate([
    (0, common_1.Post)(':token'),
    __param(0, (0, common_1.Body)('password')),
    __param(1, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserPasswordResetController.prototype, "verify", null);
UserPasswordResetController = __decorate([
    (0, common_1.Controller)('password-reset'),
    __metadata("design:paramtypes", [user_password_reset_service_1.UserPasswordResetService])
], UserPasswordResetController);
exports.UserPasswordResetController = UserPasswordResetController;
//# sourceMappingURL=user-password-reset.controller.js.map