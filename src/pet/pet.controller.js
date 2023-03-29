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
exports.PetController = void 0;
var common_1 = require("@nestjs/common");
var PetController = /** @class */ (function () {
    function PetController(petService) {
        this.petService = petService;
    }
    PetController.prototype.create = function (createPetDto) {
        return this.petService.create(createPetDto);
    };
    PetController.prototype.findAll = function () {
        return this.petService.findAll();
    };
    PetController.prototype.findOne = function (id) {
        return this.petService.findOne(+id);
    };
    PetController.prototype.update = function (id, updatePetDto) {
        return this.petService.update(+id, updatePetDto);
    };
    PetController.prototype.remove = function (id) {
        return this.petService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PetController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PetController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PetController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], PetController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], PetController.prototype, "remove");
    PetController = __decorate([
        (0, common_1.Controller)("pet")
    ], PetController);
    return PetController;
}());
exports.PetController = PetController;
