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
exports.MapPointController = void 0;
var common_1 = require("@nestjs/common");
var MapPointController = /** @class */ (function () {
    function MapPointController(mapPointService) {
        this.mapPointService = mapPointService;
    }
    MapPointController.prototype.create = function (createMapPointDto) {
        return this.mapPointService.create(createMapPointDto);
    };
    MapPointController.prototype.findAll = function () {
        return this.mapPointService.findAll();
    };
    MapPointController.prototype.findOne = function (id) {
        return this.mapPointService.findOne(+id);
    };
    MapPointController.prototype.update = function (id, updateMapPointDto) {
        return this.mapPointService.update(+id, updateMapPointDto);
    };
    MapPointController.prototype.remove = function (id) {
        return this.mapPointService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], MapPointController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], MapPointController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MapPointController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], MapPointController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MapPointController.prototype, "remove");
    MapPointController = __decorate([
        (0, common_1.Controller)('map-point')
    ], MapPointController);
    return MapPointController;
}());
exports.MapPointController = MapPointController;
