"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransactionModule = void 0;
var common_1 = require("@nestjs/common");
var transaction_service_1 = require("./transaction.service");
var transaction_controller_1 = require("./transaction.controller");
var TransactionModule = /** @class */ (function () {
    function TransactionModule() {
    }
    TransactionModule = __decorate([
        (0, common_1.Module)({
            controllers: [transaction_controller_1.TransactionController],
            providers: [transaction_service_1.TransactionService]
        })
    ], TransactionModule);
    return TransactionModule;
}());
exports.TransactionModule = TransactionModule;
