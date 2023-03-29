"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PasswordResetController = void 0;
var common_1 = require("@nestjs/common");
var PasswordResetController = /** @class */ (function () {
    function PasswordResetController(passwordResetService) {
        this.passwordResetService = passwordResetService;
    }
    PasswordResetController.prototype.create = function (createPasswordResetDto) {
        return this.passwordResetService.create(createPasswordResetDto);
    };
    PasswordResetController.prototype.findAll = function () {
        return this.passwordResetService.findAll();
    };
    PasswordResetController.prototype.findOne = function (id) {
        return this.passwordResetService.findOne(+id);
    };
    PasswordResetController.prototype.update = function (id, updatePasswordResetDto) {
        return this.passwordResetService.update(+id, updatePasswordResetDto);
    };
    PasswordResetController.prototype.remove = function (id) {
        return this.passwordResetService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PasswordResetController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PasswordResetController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PasswordResetController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], PasswordResetController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PasswordResetController.prototype, "remove");
    PasswordResetController = __decorate([
        (0, common_1.Controller)("password-reset")
    ], PasswordResetController);
    return PasswordResetController;
}());
exports.PasswordResetController = PasswordResetController;
