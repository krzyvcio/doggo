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
exports.ProfileController = void 0;
var common_1 = require("@nestjs/common");
var ProfileController = /** @class */ (function () {
    function ProfileController(profileService) {
        this.profileService = profileService;
    }
    ProfileController.prototype.create = function (createProfileDto) {
        return this.profileService.create(createProfileDto);
    };
    ProfileController.prototype.findAll = function () {
        return this.profileService.findAll();
    };
    ProfileController.prototype.findOne = function (id) {
        return this.profileService.findOne(+id);
    };
    ProfileController.prototype.update = function (id, updateProfileDto) {
        return this.profileService.update(+id, updateProfileDto);
    };
    ProfileController.prototype.remove = function (id) {
        return this.profileService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ProfileController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ProfileController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], ProfileController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], ProfileController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], ProfileController.prototype, "remove");
    ProfileController = __decorate([
        (0, common_1.Controller)("profile")
    ], ProfileController);
    return ProfileController;
}());
exports.ProfileController = ProfileController;
