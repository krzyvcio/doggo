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
exports.PetPatronController = void 0;
var common_1 = require("@nestjs/common");
var PetPatronController = /** @class */ (function () {
    function PetPatronController(petPatronService) {
        this.petPatronService = petPatronService;
    }
    PetPatronController.prototype.create = function (createPetPatronDto) {
        return this.petPatronService.create(createPetPatronDto);
    };
    PetPatronController.prototype.findAll = function () {
        return this.petPatronService.findAll();
    };
    PetPatronController.prototype.findOne = function (id) {
        return this.petPatronService.findOne(+id);
    };
    PetPatronController.prototype.update = function (id, updatePetPatronDto) {
        return this.petPatronService.update(+id, updatePetPatronDto);
    };
    PetPatronController.prototype.remove = function (id) {
        return this.petPatronService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PetPatronController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PetPatronController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], PetPatronController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], PetPatronController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], PetPatronController.prototype, "remove");
    PetPatronController = __decorate([
        (0, common_1.Controller)('pet-patron')
    ], PetPatronController);
    return PetPatronController;
}());
exports.PetPatronController = PetPatronController;
