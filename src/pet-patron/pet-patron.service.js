"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PetPatronService = void 0;
var common_1 = require("@nestjs/common");
var PetPatronService = /** @class */ (function () {
    function PetPatronService() {
    }
    PetPatronService.prototype.create = function (createPetPatronDto) {
        return 'This action adds a new petPatron';
    };
    PetPatronService.prototype.findAll = function () {
        return "This action returns all petPatron";
    };
    PetPatronService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " petPatron");
    };
    PetPatronService.prototype.update = function (id, updatePetPatronDto) {
        return "This action updates a #".concat(id, " petPatron");
    };
    PetPatronService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " petPatron");
    };
    PetPatronService = __decorate([
        (0, common_1.Injectable)()
    ], PetPatronService);
    return PetPatronService;
}());
exports.PetPatronService = PetPatronService;
