"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Payment = exports.PaymentMethod = void 0;
var typeorm_1 = require("typeorm");
var order_entity_1 = require("../../order/entities/order.entity");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["INTERNAL_PAYMENT"] = "INTERNAL_PAYMENT";
    PaymentMethod["WITHDRAWAL"] = "WITHDRAWAL";
    PaymentMethod["REMITTANCE"] = "REMITTANCE";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
var Payment = /** @class */ (function () {
    function Payment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Payment.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], Payment.prototype, "method");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], Payment.prototype, "amount");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], Payment.prototype, "currency");
    __decorate([
        (0, typeorm_1.Column)({ nullable: false })
    ], Payment.prototype, "description");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return order_entity_1.Order; }, function (order) { return order.id; }, {
            nullable: false
        })
    ], Payment.prototype, "order");
    Payment = __decorate([
        (0, typeorm_1.Entity)()
    ], Payment);
    return Payment;
}());
exports.Payment = Payment;
