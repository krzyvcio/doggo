"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Trip = exports.TripStatus = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var location_entity_1 = require("../../location/entities/location.entity");
var payment_entity_1 = require("../../payment/entities/payment.entity");
var user_entity_1 = require("../../user/entities/user.entity");
var TripStatus;
(function (TripStatus) {
    TripStatus["PENDING"] = "PENDING";
    TripStatus["CONFIRMED"] = "CONFIRMED";
    TripStatus["CANCELLED"] = "CANCELLED";
    TripStatus["FINISHED"] = "FINISHED";
    TripStatus["FINISHED_WITH_ERRORS"] = "FINISHED_WITH_ERRORS";
    TripStatus["EMERGENCY_STOP"] = "EMERGENCY_STOP";
    TripStatus["ACCIDENT_STOP"] = "ACCIDENT_STOP";
})(TripStatus = exports.TripStatus || (exports.TripStatus = {}));
var Trip = /** @class */ (function () {
    function Trip() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Trip.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Trip.prototype, "petPatron");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Trip.prototype, "petOwner");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "pickupInfo");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.Location; }, function (loc) { return loc.id; }, {
            nullable: false
        })
    ], Trip.prototype, "pickupLocation");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "pickupEstimateTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "pickupTime");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.Location; }, function (loc) { return loc.id; }, {
            nullable: false
        })
    ], Trip.prototype, "startLocation");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.Location; }, function (loc) { return loc.id; }, {
            nullable: false
        })
    ], Trip.prototype, "endLocation");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "feedingInfo");
    __decorate([
        (0, typeorm_1.Column)('interval')
    ], Trip.prototype, "requestTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "startTime");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "endTime");
    __decorate([
        (0, typeorm_1.Column)('float', {})
    ], Trip.prototype, "walkDistance");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "walkDuration");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "idleWalkDuration");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, "default": null })
    ], Trip.prototype, "cancelReason");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return payment_entity_1.Payment; }, function (payment) { return payment.id; }, {
            nullable: false
        })
    ], Trip.prototype, "payment");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "expectedFare");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "expectedDistance");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "expectedDuration");
    __decorate([
        (0, typeorm_1.Column)('float', {})
    ], Trip.prototype, "totalFare");
    __decorate([
        (0, typeorm_1.Column)('float', {})
    ], Trip.prototype, "netFare");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "totalDistance");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "totalDuration");
    __decorate([
        (0, typeorm_1.Column)()
    ], Trip.prototype, "zoneCode");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(5)
    ], Trip.prototype, "ratingForPetOwner");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(5)
    ], Trip.prototype, "ratingForPetPatron");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], Trip.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], Trip.prototype, "modifiedAt");
    Trip = __decorate([
        (0, typeorm_1.Entity)()
    ], Trip);
    return Trip;
}());
exports.Trip = Trip;
