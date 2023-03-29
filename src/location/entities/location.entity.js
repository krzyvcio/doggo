"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Location = void 0;
var typeorm_1 = require("typeorm");
var map_point_entity_1 = require("../../map-point/entities/map-point.entity");
var Location = /** @class */ (function () {
    function Location() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Location.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return map_point_entity_1.MapPoint; }, function (mp) { return mp.id; }, {
            nullable: true
        })
    ], Location.prototype, "mapPoint");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return map_point_entity_1.MapPoint; }, function (mp) { return mp.id; }, {
            nullable: true
        })
    ], Location.prototype, "related");
    __decorate([
        (0, typeorm_1.Column)()
    ], Location.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)()
    ], Location.prototype, "city");
    __decorate([
        (0, typeorm_1.Column)()
    ], Location.prototype, "zipCode");
    Location = __decorate([
        (0, typeorm_1.Entity)()
    ], Location);
    return Location;
}());
exports.Location = Location;
