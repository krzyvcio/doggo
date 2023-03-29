"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Profile = void 0;
var typeorm_1 = require("typeorm");
var pet_owner_entity_1 = require("../../pet-owner/entities/pet-owner.entity");
var pet_patron_entity_1 = require("../../pet-patron/entities/pet-patron.entity");
var user_entity_1 = require("../../user/entities/user.entity");
var Profile = /** @class */ (function () {
    function Profile() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Profile.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Profile.prototype, "bio");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Profile.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)()
    ], Profile.prototype, "profileType");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return pet_owner_entity_1.PetOwner; }, function (owner) { return owner.id; }, {
            nullable: true
        })
    ], Profile.prototype, "petOwner");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return pet_patron_entity_1.PetPatron; }, function (walker) { return walker.id; }, {
            nullable: true
        })
    ], Profile.prototype, "petPatron");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], Profile.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], Profile.prototype, "modifiedAt");
    Profile = __decorate([
        (0, typeorm_1.Entity)()
    ], Profile);
    return Profile;
}());
exports.Profile = Profile;
