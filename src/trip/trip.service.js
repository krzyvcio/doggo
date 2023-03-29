"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TripService = void 0;
var common_1 = require("@nestjs/common");
var TripService = /** @class */ (function () {
    function TripService() {
    }
    TripService.prototype.create = function (createTripDto) {
        return 'This action adds a new trip';
    };
    TripService.prototype.findAll = function () {
        return "This action returns all trip";
    };
    TripService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " trip");
    };
    TripService.prototype.update = function (id, updateTripDto) {
        return "This action updates a #".concat(id, " trip");
    };
    TripService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " trip");
    };
    TripService = __decorate([
        (0, common_1.Injectable)()
    ], TripService);
    return TripService;
}());
exports.TripService = TripService;
