"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../constants");
var base_api_exception_1 = require("../exceptions/base-api.exception");
var util_1 = require("../request-context/util");
var AllExceptionsFilter = /** @class */ (function () {
    /** set logger context */
    function AllExceptionsFilter(config, logger) {
        this.config = config;
        this.logger = logger;
        this.logger.setContext(AllExceptionsFilter_1.name);
    }
    AllExceptionsFilter_1 = AllExceptionsFilter;
    AllExceptionsFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var req = ctx.getRequest();
        var res = ctx.getResponse();
        var path = req.url;
        var timestamp = new Date().toISOString();
        var requestId = req.headers[constants_1.REQUEST_ID_TOKEN_HEADER];
        var requestContext = (0, util_1.createRequestContext)(req);
        var stack;
        var statusCode;
        var errorName;
        var message;
        var details;
        // TODO : Based on language value in header, return a localized message.
        var acceptedLanguage = 'ja';
        var localizedMessage;
        // TODO : Refactor the below cases into a switch case and tidy up error response creation.
        if (exception instanceof base_api_exception_1.BaseApiException) {
            statusCode = exception.getStatus();
            errorName = exception.constructor.name;
            message = exception.message;
            localizedMessage = exception.localizedMessage[acceptedLanguage];
            details = exception.details || exception.getResponse();
        }
        else if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            errorName = exception.constructor.name;
            message = exception.message;
            details = exception.getResponse();
        }
        else if (exception instanceof Error) {
            errorName = exception.constructor.name;
            message = exception.message;
            stack = exception.stack;
        }
        // Set to internal server error in case it did not match above categories.
        statusCode = statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        errorName = errorName || 'InternalException';
        message = message || 'Internal server error';
        // NOTE: For reference, please check https://cloud.google.com/apis/design/errors
        var error = {
            statusCode: statusCode,
            message: message,
            localizedMessage: localizedMessage,
            errorName: errorName,
            details: details,
            // Additional meta added by us.
            path: path,
            requestId: requestId,
            timestamp: timestamp
        };
        this.logger.warn(requestContext, error.message, {
            error: error,
            stack: stack
        });
        // Suppress original internal server error details in prod mode
        var isProMood = this.config.get('env') !== 'development';
        if (isProMood && statusCode === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            error.message = 'Internal server error';
        }
        res.status(statusCode).json({ error: error });
    };
    var AllExceptionsFilter_1;
    AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
        (0, common_1.Catch)()
    ], AllExceptionsFilter);
    return AllExceptionsFilter;
}());
exports.AllExceptionsFilter = AllExceptionsFilter;
