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
exports.TripLocationHistoryController = void 0;
var common_1 = require("@nestjs/common");
var TripLocationHistoryController = /** @class */ (function () {
    function TripLocationHistoryController(tripLocationHistoryService) {
        this.tripLocationHistoryService = tripLocationHistoryService;
    }
    TripLocationHistoryController.prototype.create = function (createTripLocationHistoryDto) {
        return this.tripLocationHistoryService.create(createTripLocationHistoryDto);
    };
    TripLocationHistoryController.prototype.findAll = function () {
        return this.tripLocationHistoryService.findAll();
    };
    TripLocationHistoryController.prototype.findOne = function (id) {
        return this.tripLocationHistoryService.findOne(+id);
    };
    TripLocationHistoryController.prototype.update = function (id, updateTripLocationHistoryDto) {
        return this.tripLocationHistoryService.update(+id, updateTripLocationHistoryDto);
    };
    TripLocationHistoryController.prototype.remove = function (id) {
        return this.tripLocationHistoryService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TripLocationHistoryController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], TripLocationHistoryController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TripLocationHistoryController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TripLocationHistoryController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TripLocationHistoryController.prototype, "remove");
    TripLocationHistoryController = __decorate([
        (0, common_1.Controller)('trip-location-history')
    ], TripLocationHistoryController);
    return TripLocationHistoryController;
}());
exports.TripLocationHistoryController = TripLocationHistoryController;
