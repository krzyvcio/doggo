"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Wallet = exports.MoneyCurrency = exports.WalletStatus = void 0;
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../user/entities/user.entity");
var WalletStatus;
(function (WalletStatus) {
    WalletStatus[WalletStatus["ACTIVE"] = 1] = "ACTIVE";
    WalletStatus[WalletStatus["INACTIVE"] = 0] = "INACTIVE";
})(WalletStatus = exports.WalletStatus || (exports.WalletStatus = {}));
var MoneyCurrency;
(function (MoneyCurrency) {
    MoneyCurrency["USD"] = "USD";
    MoneyCurrency["EUR"] = "EUR";
    MoneyCurrency["GBP"] = "GBP";
    MoneyCurrency["PLN"] = "PLN";
})(MoneyCurrency = exports.MoneyCurrency || (exports.MoneyCurrency = {}));
var Wallet = /** @class */ (function () {
    function Wallet() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Wallet.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Wallet.prototype, "wallet");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Wallet.prototype, "user");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], Wallet.prototype, "walletAddress");
    __decorate([
        (0, typeorm_1.Column)()
    ], Wallet.prototype, "balance");
    __decorate([
        (0, typeorm_1.Column)({ "default": MoneyCurrency.PLN })
    ], Wallet.prototype, "currency");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], Wallet.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], Wallet.prototype, "modifiedAt");
    Wallet = __decorate([
        (0, typeorm_1.Entity)()
    ], Wallet);
    return Wallet;
}());
exports.Wallet = Wallet;
