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
exports.EmailChangeController = void 0;
var common_1 = require("@nestjs/common");
var EmailChangeController = /** @class */ (function () {
    function EmailChangeController(emailChangeService) {
        this.emailChangeService = emailChangeService;
    }
    EmailChangeController.prototype.create = function (createEmailChangeDto) {
        return this.emailChangeService.create(createEmailChangeDto);
    };
    EmailChangeController.prototype.findAll = function () {
        return this.emailChangeService.findAll();
    };
    EmailChangeController.prototype.findOne = function (id) {
        return this.emailChangeService.findOne(+id);
    };
    EmailChangeController.prototype.update = function (id, updateEmailChangeDto) {
        return this.emailChangeService.update(+id, updateEmailChangeDto);
    };
    EmailChangeController.prototype.remove = function (id) {
        return this.emailChangeService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], EmailChangeController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], EmailChangeController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], EmailChangeController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], EmailChangeController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], EmailChangeController.prototype, "remove");
    EmailChangeController = __decorate([
        (0, common_1.Controller)("email-change")
    ], EmailChangeController);
    return EmailChangeController;
}());
exports.EmailChangeController = EmailChangeController;
