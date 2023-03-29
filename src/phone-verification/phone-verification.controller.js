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
exports.PhoneVerificationController = void 0;
var common_1 = require("@nestjs/common");
var PhoneVerificationController = /** @class */ (function () {
    function PhoneVerificationController(phoneVerificationService) {
        this.phoneVerificationService = phoneVerificationService;
    }
    PhoneVerificationController.prototype.create = function (createPhoneVerificationDto) {
        return this.phoneVerificationService.create(createPhoneVerificationDto);
    };
    PhoneVerificationController.prototype.findAll = function () {
        return this.phoneVerificationService.findAll();
    };
    PhoneVerificationController.prototype.findOne = function (id) {
        return this.phoneVerificationService.findOne(+id);
    };
    PhoneVerificationController.prototype.update = function (id, updatePhoneVerificationDto) {
        return this.phoneVerificationService.update(+id, updatePhoneVerificationDto);
    };
    PhoneVerificationController.prototype.remove = function (id) {
        return this.phoneVerificationService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PhoneVerificationController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PhoneVerificationController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PhoneVerificationController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], PhoneVerificationController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PhoneVerificationController.prototype, "remove");
    PhoneVerificationController = __decorate([
        (0, common_1.Controller)("phone-verification")
    ], PhoneVerificationController);
    return PhoneVerificationController;
}());
exports.PhoneVerificationController = PhoneVerificationController;
