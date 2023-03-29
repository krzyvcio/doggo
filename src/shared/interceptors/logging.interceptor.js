"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoggingInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var util_1 = require("../request-context/util");
var LoggingInterceptor = /** @class */ (function () {
    function LoggingInterceptor(appLogger) {
        this.appLogger = appLogger;
        this.appLogger.setContext(LoggingInterceptor_1.name);
    }
    LoggingInterceptor_1 = LoggingInterceptor;
    LoggingInterceptor.prototype.intercept = function (context, next) {
        var _this = this;
        var request = context.switchToHttp().getRequest();
        var method = request.method;
        var ctx = (0, util_1.createRequestContext)(request);
        var now = Date.now();
        return next.handle().pipe((0, operators_1.tap)(function () {
            var response = context.switchToHttp().getResponse();
            var statusCode = response.statusCode;
            var responseTime = Date.now() - now;
            var resData = { method: method, statusCode: statusCode, responseTime: responseTime };
            _this.appLogger.log(ctx, 'Request completed', { resData: resData });
        }));
    };
    var LoggingInterceptor_1;
    LoggingInterceptor = LoggingInterceptor_1 = __decorate([
        (0, common_1.Injectable)()
    ], LoggingInterceptor);
    return LoggingInterceptor;
}());
exports.LoggingInterceptor = LoggingInterceptor;
