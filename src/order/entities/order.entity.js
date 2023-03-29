"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Order = exports.CarryType = exports.OrderType = void 0;
var typeorm_1 = require("typeorm");
var location_entity_1 = require("../../location/entities/location.entity");
var pet_entity_1 = require("../../pet/entities/pet.entity");
var schedule_entity_1 = require("../../schedule/entities/schedule.entity");
var trip_entity_1 = require("../../trip/entities/trip.entity");
var user_entity_1 = require("../../user/entities/user.entity");
var OrderType;
(function (OrderType) {
    OrderType["WALK"] = "WALK";
    OrderType["CARRY"] = "CARRY";
    OrderType["FEED"] = "FEED";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var CarryType;
(function (CarryType) {
    CarryType["WALKER_PLACE"] = "WALKER_PLACE";
    CarryType["OWNER_PLACE"] = "OWNER_PLACE";
})(CarryType = exports.CarryType || (exports.CarryType = {}));
var Order = /** @class */ (function () {
    function Order() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Order.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Order.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)('simple-array')
    ], Order.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "startAt");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "endAt");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pet_entity_1.Pet; }, function (pet) { return pet.id; }, {})
    ], Order.prototype, "pets");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return trip_entity_1.Trip; }, function (trip) { return trip.id; }, {})
    ], Order.prototype, "trips");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "estimatedCost");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "currency");
    __decorate([
        (0, typeorm_1.Column)('interval', { nullable: true })
    ], Order.prototype, "walkDuration");
    __decorate([
        (0, typeorm_1.Column)('float', { nullable: true })
    ], Order.prototype, "walkDistance");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "carryType");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return location_entity_1.Location; }, function (loc) { return loc.id; }, {
            nullable: true
        })
    ], Order.prototype, "carryLocation");
    __decorate([
        (0, typeorm_1.Column)()
    ], Order.prototype, "feedInfo");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return schedule_entity_1.Schedule; }, function (schedule) { return schedule.id; }, {})
    ], Order.prototype, "schedule");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], Order.prototype, "isPublished");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], Order.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], Order.prototype, "modifiedAt");
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}());
exports.Order = Order;
