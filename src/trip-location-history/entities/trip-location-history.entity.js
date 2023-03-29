"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TripLocationHistory = void 0;
var typeorm_1 = require("typeorm");
var trip_entity_1 = require("../../trip/entities/trip.entity");
var TripLocationHistory = /** @class */ (function () {
    function TripLocationHistory() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TripLocationHistory.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return trip_entity_1.Trip; }, function (trip) { return trip.id; }, {
            nullable: false
        })
    ], TripLocationHistory.prototype, "trip");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'geography',
            spatialFeatureType: 'Point',
            srid: 4326,
            nullable: true
        })
    ], TripLocationHistory.prototype, "location");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], TripLocationHistory.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], TripLocationHistory.prototype, "modifiedAt");
    TripLocationHistory = __decorate([
        (0, typeorm_1.Entity)()
    ], TripLocationHistory);
    return TripLocationHistory;
}());
exports.TripLocationHistory = TripLocationHistory;
