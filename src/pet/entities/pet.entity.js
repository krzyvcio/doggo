"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Pet = exports.PetType = void 0;
var typeorm_1 = require("typeorm");
var pet_owner_entity_1 = require("../../pet-owner/entities/pet-owner.entity");
var user_entity_1 = require("../../user/entities/user.entity");
var PetType;
(function (PetType) {
    PetType[PetType["None"] = 0] = "None";
    PetType[PetType["DOG"] = 1] = "DOG";
    PetType[PetType["CAT"] = 2] = "CAT";
})(PetType = exports.PetType || (exports.PetType = {}));
var Pet = /** @class */ (function () {
    function Pet() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Pet.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Pet.prototype, "user");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return pet_owner_entity_1.PetOwner; }, function (petOwner) { return petOwner.id; }, {})
    ], Pet.prototype, "petOwners");
    __decorate([
        (0, typeorm_1.Column)()
    ], Pet.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)({ "default": PetType.DOG })
    ], Pet.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], Pet.prototype, "birthDate");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], Pet.prototype, "photo");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp",
            "default": function () { return "CURRENT_TIMESTAMP(6)"; },
            nullable: true
        })
    ], Pet.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp",
            "default": function () { return "CURRENT_TIMESTAMP(6)"; },
            onUpdate: "CURRENT_TIMESTAMP(6)",
            nullable: true
        })
    ], Pet.prototype, "modifiedAt");
    Pet = __decorate([
        (0, typeorm_1.Entity)()
    ], Pet);
    return Pet;
}());
exports.Pet = Pet;
