"use strict";
exports.__esModule = true;
exports.RequestIdMiddleware = void 0;
var uuid_1 = require("uuid");
var constants_1 = require("../../constants");
var RequestIdMiddleware = function (req, res, next) {
    /** set request id, if not being set yet */
    if (!req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] ||
        !(0, uuid_1.validate)(req.header(constants_1.REQUEST_ID_TOKEN_HEADER))) {
        req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] = (0, uuid_1.v4)();
    }
    /** set res id in response from req */
    res.set(constants_1.REQUEST_ID_TOKEN_HEADER, req.headers[constants_1.REQUEST_ID_TOKEN_HEADER]);
    next();
};
exports.RequestIdMiddleware = RequestIdMiddleware;
