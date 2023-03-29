"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppLogger = void 0;
var common_1 = require("@nestjs/common");
var winston_1 = require("winston");
var AppLogger = /** @class */ (function () {
    function AppLogger() {
        this.logger = (0, winston_1.createLogger)({
            transports: [new winston_1.transports.Console()]
        });
    }
    AppLogger.prototype.setContext = function (context) {
        this.context = context;
    };
    AppLogger.prototype.error = function (ctx, message, meta) {
        var timestamp = new Date().toISOString();
        return this.logger.error(__assign({ message: message, contextName: this.context, ctx: ctx, timestamp: timestamp }, meta));
    };
    AppLogger.prototype.warn = function (ctx, message, meta) {
        var timestamp = new Date().toISOString();
        return this.logger.warn(__assign({ message: message, contextName: this.context, ctx: ctx, timestamp: timestamp }, meta));
    };
    AppLogger.prototype.debug = function (ctx, message, meta) {
        var timestamp = new Date().toISOString();
        return this.logger.debug(__assign({ message: message, contextName: this.context, ctx: ctx, timestamp: timestamp }, meta));
    };
    AppLogger.prototype.verbose = function (ctx, message, meta) {
        var timestamp = new Date().toISOString();
        return this.logger.verbose(__assign({ message: message, contextName: this.context, ctx: ctx, timestamp: timestamp }, meta));
    };
    AppLogger.prototype.log = function (ctx, message, meta) {
        var timestamp = new Date().toISOString();
        return this.logger.info(__assign({ message: message, contextName: this.context, ctx: ctx, timestamp: timestamp }, meta));
    };
    AppLogger = __decorate([
        (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT })
    ], AppLogger);
    return AppLogger;
}());
exports.AppLogger = AppLogger;
