"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Transaction = exports.TransactionStatus = void 0;
var class_validator_1 = require("class-validator");
var typeorm_1 = require("typeorm");
var user_entity_1 = require("../../user/entities/user.entity");
var wallet_entity_1 = require("../../wallet/entities/wallet.entity");
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PREPARATION"] = "PREPARATION";
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    TransactionStatus["COMPLETED"] = "COMPLETED";
    TransactionStatus["REJECTED"] = "REJECTED";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Transaction.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return user_entity_1.User; }, function (user) { return user.id; }, {
            nullable: false
        })
    ], Transaction.prototype, "user");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return wallet_entity_1.Wallet; }, function (wallet) { return wallet.id; }, {
            nullable: false
        })
    ], Transaction.prototype, "fromWallet");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return wallet_entity_1.Wallet; }, function (wallet) { return wallet.id; }, {
            nullable: false
        })
    ], Transaction.prototype, "toWallet");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false }),
        (0, class_validator_1.Min)(0)
    ], Transaction.prototype, "amount");
    __decorate([
        (0, typeorm_1.Column)()
    ], Transaction.prototype, "currency");
    __decorate([
        (0, typeorm_1.Column)()
    ], Transaction.prototype, "startedAt");
    __decorate([
        (0, typeorm_1.Column)()
    ], Transaction.prototype, "endedAt");
    __decorate([
        (0, typeorm_1.Column)()
    ], Transaction.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)('interval')
    ], Transaction.prototype, "duration");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            nullable: true
        })
    ], Transaction.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: 'timestamp',
            "default": function () { return 'CURRENT_TIMESTAMP(6)'; },
            onUpdate: 'CURRENT_TIMESTAMP(6)',
            nullable: true
        })
    ], Transaction.prototype, "modifiedAt");
    Transaction = __decorate([
        (0, typeorm_1.Entity)()
    ], Transaction);
    return Transaction;
}());
exports.Transaction = Transaction;
