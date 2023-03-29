"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmailChange = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../user/entities/user.entity");
var EmailChange = /** @class */ (function () {
    function EmailChange() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], EmailChange.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("varchar", { length: 21 })
    ], EmailChange.prototype, "token");
    __decorate([
        (0, typeorm_1.Column)()
    ], EmailChange.prototype, "newEmail");
    __decorate([
        (0, typeorm_1.Column)()
    ], EmailChange.prototype, "userId");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, { onDelete: "CASCADE" })
    ], EmailChange.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)()
    ], EmailChange.prototype, "validUntil");
    __decorate([
        (0, typeorm_1.Column)({ "default": false })
    ], EmailChange.prototype, "isVerification");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp",
            "default": function () { return "CURRENT_TIMESTAMP(6)"; },
            nullable: true
        })
    ], EmailChange.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp",
            "default": function () { return "CURRENT_TIMESTAMP(6)"; },
            onUpdate: "CURRENT_TIMESTAMP(6)",
            nullable: true
        })
    ], EmailChange.prototype, "modifiedAt");
    EmailChange = __decorate([
        (0, typeorm_1.Entity)("emailChange")
    ], EmailChange);
    return EmailChange;
}());
exports.EmailChange = EmailChange;
