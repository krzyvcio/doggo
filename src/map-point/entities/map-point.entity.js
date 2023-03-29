"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MapPoint = void 0;
var typeorm_1 = require("typeorm");
var MapPoint = /** @class */ (function () {
    function MapPoint() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], MapPoint.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'geography',
            spatialFeatureType: 'Point',
            srid: 4326,
            nullable: true
        })
    ], MapPoint.prototype, "location");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], MapPoint.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], MapPoint.prototype, "modifiedAt");
    MapPoint = __decorate([
        (0, typeorm_1.Entity)()
    ], MapPoint);
    return MapPoint;
}());
exports.MapPoint = MapPoint;
