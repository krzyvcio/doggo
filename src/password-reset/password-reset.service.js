"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PasswordResetService = void 0;
var common_1 = require("@nestjs/common");
var PasswordResetService = /** @class */ (function () {
    function PasswordResetService() {
    }
    PasswordResetService.prototype.create = function (createPasswordResetDto) {
        return "This action adds a new passwordReset";
    };
    PasswordResetService.prototype.findAll = function () {
        return "This action returns all passwordReset";
    };
    PasswordResetService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " passwordReset");
    };
    PasswordResetService.prototype.update = function (id, updatePasswordResetDto) {
        return "This action updates a #".concat(id, " passwordReset");
    };
    PasswordResetService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " passwordReset");
    };
    PasswordResetService = __decorate([
        (0, common_1.Injectable)()
    ], PasswordResetService);
    return PasswordResetService;
}());
exports.PasswordResetService = PasswordResetService;
