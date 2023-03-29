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
exports.TransactionController = void 0;
var common_1 = require("@nestjs/common");
var TransactionController = /** @class */ (function () {
    function TransactionController(transactionService) {
        this.transactionService = transactionService;
    }
    TransactionController.prototype.create = function (createTransactionDto) {
        return this.transactionService.create(createTransactionDto);
    };
    TransactionController.prototype.findAll = function () {
        return this.transactionService.findAll();
    };
    TransactionController.prototype.findOne = function (id) {
        return this.transactionService.findOne(+id);
    };
    TransactionController.prototype.update = function (id, updateTransactionDto) {
        return this.transactionService.update(+id, updateTransactionDto);
    };
    TransactionController.prototype.remove = function (id) {
        return this.transactionService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], TransactionController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], TransactionController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TransactionController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], TransactionController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], TransactionController.prototype, "remove");
    TransactionController = __decorate([
        (0, common_1.Controller)('transaction')
    ], TransactionController);
    return TransactionController;
}());
exports.TransactionController = TransactionController;
