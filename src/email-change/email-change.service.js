"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmailChangeService = void 0;
var common_1 = require("@nestjs/common");
var EmailChangeService = /** @class */ (function () {
    function EmailChangeService() {
    }
    EmailChangeService.prototype.create = function (createEmailChangeDto) {
        return "This action adds a new emailChange";
    };
    EmailChangeService.prototype.findAll = function () {
        return "This action returns all emailChange";
    };
    EmailChangeService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " emailChange");
    };
    EmailChangeService.prototype.update = function (id, updateEmailChangeDto) {
        return "This action updates a #".concat(id, " emailChange");
    };
    EmailChangeService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " emailChange");
    };
    EmailChangeService = __decorate([
        (0, common_1.Injectable)()
    ], EmailChangeService);
    return EmailChangeService;
}());
exports.EmailChangeService = EmailChangeService;
