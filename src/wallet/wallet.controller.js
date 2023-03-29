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
exports.WalletController = void 0;
var common_1 = require("@nestjs/common");
var WalletController = /** @class */ (function () {
    function WalletController(walletService) {
        this.walletService = walletService;
    }
    WalletController.prototype.create = function (createWalletDto) {
        return this.walletService.create(createWalletDto);
    };
    WalletController.prototype.findAll = function () {
        return this.walletService.findAll();
    };
    WalletController.prototype.findOne = function (id) {
        return this.walletService.findOne(+id);
    };
    WalletController.prototype.update = function (id, updateWalletDto) {
        return this.walletService.update(+id, updateWalletDto);
    };
    WalletController.prototype.remove = function (id) {
        return this.walletService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], WalletController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], WalletController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], WalletController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], WalletController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], WalletController.prototype, "remove");
    WalletController = __decorate([
        (0, common_1.Controller)('wallet')
    ], WalletController);
    return WalletController;
}());
exports.WalletController = WalletController;
