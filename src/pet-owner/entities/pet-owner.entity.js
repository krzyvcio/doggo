"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PetOwner = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var schedule_entity_1 = require("../../schedule/entities/schedule.entity");
var user_entity_1 = require("../../user/entities/user.entity");
var PetOwner = /** @class */ (function () {
    function PetOwner() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], PetOwner.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], PetOwner.prototype, "user");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return schedule_entity_1.Schedule; }, function (s) { return s.id; })
    ], PetOwner.prototype, "schedules");
    __decorate([
        (0, typeorm_1.Column)("float"),
        (0, class_validator_1.Min)(1),
        (0, class_validator_1.Max)(5)
    ], PetOwner.prototype, "rating");
    PetOwner = __decorate([
        (0, typeorm_1.Entity)()
    ], PetOwner);
    return PetOwner;
}());
exports.PetOwner = PetOwner;
