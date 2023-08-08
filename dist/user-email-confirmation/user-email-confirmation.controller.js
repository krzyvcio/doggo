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
exports.UserEmailConfirmationController = void 0;
const common_1 = require("@nestjs/common");
const user_email_confirmation_service_1 = require("./user-email-confirmation.service");
let UserEmailConfirmationController = class UserEmailConfirmationController {
    constructor(userEmailConfirmationService) {
        this.userEmailConfirmationService = userEmailConfirmationService;
    }
    async verify(token) {
        if (!token) {
            return {
                message: 'Token is required',
            };
        }
        const isVeryfied = await this.userEmailConfirmationService.verifyUser(token);
        if (isVeryfied) {
            return {
                message: 'User verified',
            };
        }
        else {
            return {
                message: 'User cannot be verified',
            };
        }
    }
};
__decorate([
    (0, common_1.Get)(':token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserEmailConfirmationController.prototype, "verify", null);
UserEmailConfirmationController = __decorate([
    (0, common_1.Controller)('email-confirmation'),
    __metadata("design:paramtypes", [user_email_confirmation_service_1.UserEmailConfirmationService])
], UserEmailConfirmationController);
exports.UserEmailConfirmationController = UserEmailConfirmationController;
//# sourceMappingURL=user-email-confirmation.controller.js.map