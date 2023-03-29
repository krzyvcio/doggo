"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PaymentController = void 0;
var common_1 = require("@nestjs/common");
var PaymentController = /** @class */ (function () {
    function PaymentController(paymentService) {
        this.paymentService = paymentService;
    }
    PaymentController.prototype.create = function (createPaymentDto) {
        return this.paymentService.create(createPaymentDto);
    };
    PaymentController.prototype.findAll = function () {
        return this.paymentService.findAll();
    };
    PaymentController.prototype.findOne = function (id) {
        return this.paymentService.findOne(+id);
    };
    PaymentController.prototype.update = function (id, updatePaymentDto) {
        return this.paymentService.update(+id, updatePaymentDto);
    };
    PaymentController.prototype.remove = function (id) {
        return this.paymentService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], PaymentController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], PaymentController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], PaymentController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], PaymentController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], PaymentController.prototype, "remove");
    PaymentController = __decorate([
        (0, common_1.Controller)('payment')
    ], PaymentController);
    return PaymentController;
}());
exports.PaymentController = PaymentController;
