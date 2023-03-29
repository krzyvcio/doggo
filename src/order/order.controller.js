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
exports.OrderController = void 0;
var common_1 = require("@nestjs/common");
var OrderController = /** @class */ (function () {
    function OrderController(orderService) {
        this.orderService = orderService;
    }
    OrderController.prototype.create = function (createOrderDto) {
        return this.orderService.create(createOrderDto);
    };
    OrderController.prototype.findAll = function () {
        return this.orderService.findAll();
    };
    OrderController.prototype.findOne = function (id) {
        return this.orderService.findOne(+id);
    };
    OrderController.prototype.update = function (id, updateOrderDto) {
        return this.orderService.update(+id, updateOrderDto);
    };
    OrderController.prototype.remove = function (id) {
        return this.orderService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], OrderController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], OrderController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrderController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], OrderController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], OrderController.prototype, "remove");
    OrderController = __decorate([
        (0, common_1.Controller)('order')
    ], OrderController);
    return OrderController;
}());
exports.OrderController = OrderController;
