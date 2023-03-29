"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapPointService = void 0;
var common_1 = require("@nestjs/common");
var MapPointService = /** @class */ (function () {
    function MapPointService() {
    }
    MapPointService.prototype.create = function (createMapPointDto) {
        var pointObject = {
            type: 'Point',
            coordinates: [createMapPointDto.lon, createMapPointDto.lat]
        };
        //location.location = pointObject;
        //return await this.repo.save(location);
    };
    MapPointService.prototype.findAll = function () {
        return "This action returns all mapPoint";
    };
    MapPointService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " mapPoint");
    };
    MapPointService.prototype.update = function (id, updateMapPointDto) {
        return "This action updates a #".concat(id, " mapPoint");
    };
    MapPointService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " mapPoint");
    };
    MapPointService = __decorate([
        (0, common_1.Injectable)()
    ], MapPointService);
    return MapPointService;
}());
exports.MapPointService = MapPointService;
