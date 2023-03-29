"use strict";
exports.__esModule = true;
exports.ReqContext = void 0;
var common_1 = require("@nestjs/common");
var util_1 = require("./util");
exports.ReqContext = (0, common_1.createParamDecorator)(function (data, ctx) {
    var request = ctx.switchToHttp().getRequest();
    return (0, util_1.createRequestContext)(request);
});
