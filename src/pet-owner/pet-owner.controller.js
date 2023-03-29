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
exports.PetOwnerController = void 0;
var common_1 = require("@nestjs/common");
var PetOwnerController = /** @class */ (function () {
    function PetOwnerController(petOwnerService) {
        this.petOwnerService = petOwnerService;
    }
    PetOwnerController.prototype.create = function (createPetOwnerDto) {
        return this.petOwnerService.create(createPetOwnerDto);
    };
    PetOwnerController.prototype.findAll = function () {
        return this.petOwnerService.findAll();
    };
    PetOwnerController.prototype.findOne = function (id) {
        return this.petOwnerService.findOne(+id);
    };
    PetOwnerController.prototype.update = function (id, updatePetOwnerDto) {
        return this.petOwnerService.update(+id, updatePetOwnerDto);
    };
    PetOwnerController.prototype.remove = function (id) {
        return this.petOwnerService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PetOwnerController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PetOwnerController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PetOwnerController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], PetOwnerController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PetOwnerController.prototype, "remove");
    PetOwnerController = __decorate([
        (0, common_1.Controller)("pet-owner")
    ], PetOwnerController);
    return PetOwnerController;
}());
exports.PetOwnerController = PetOwnerController;
