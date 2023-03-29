"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var email_verification_entity_1 = require("../../email-verification/entities/email-verification.entity");
var password_reset_entity_1 = require("../../password-reset/entities/password-reset.entity");
var phone_verification_entity_1 = require("../../phone-verification/entities/phone-verification.entity");
var profile_entity_1 = require("../../profile/entities/profile.entity");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Unique)('username', ['username']),
        (0, typeorm_1.Column)({ length: 200 })
    ], User.prototype, "username");
    __decorate([
        (0, typeorm_1.Unique)('email', ['email']),
        (0, typeorm_1.Column)({ length: 100 })
    ], User.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "passwordHash");
    __decorate([
        (0, typeorm_1.Column)({ length: 200 })
    ], User.prototype, "firstName");
    __decorate([
        (0, typeorm_1.Column)({ length: 200 })
    ], User.prototype, "lastName");
    __decorate([
        (0, typeorm_1.Column)({ length: 100, nullable: true })
    ], User.prototype, "middleName");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], User.prototype, "emailVerified");
    __decorate([
        (0, typeorm_1.Column)({ nullable: true })
    ], User.prototype, "birthDate");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return email_verification_entity_1.EmailVerification; }, function (user) { return user.id; }, {
            nullable: true
        })
    ], User.prototype, "emailVerification");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return password_reset_entity_1.PasswordReset; }, function (user) { return user.id; }, {
            nullable: true
        })
    ], User.prototype, "passwordReset");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "phone");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return phone_verification_entity_1.PhoneVerification; }, function (user) { return user.id; }, {
            nullable: true
        })
    ], User.prototype, "phoneVerification");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; }
        })
    ], User.prototype, "registrationDate");
    __decorate([
        (0, typeorm_1.Column)('simple-array')
    ], User.prototype, "roles");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return profile_entity_1.Profile; }, function (user) { return user.id; }, {
            nullable: true
        })
    ], User.prototype, "profileWalker");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return profile_entity_1.Profile; }, function (user) { return user.id; }, {
            nullable: true
        })
    ], User.prototype, "profileOwner");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "isAccountDisabled");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "age");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'createdAt', nullable: true })
    ], User.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt', nullable: true })
    ], User.prototype, "updatedAt");
    User = __decorate([
        (0, typeorm_1.Entity)('users')
    ], User);
    return User;
}());
exports.User = User;
