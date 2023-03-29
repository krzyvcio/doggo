"use strict";
exports.__esModule = true;
exports.createRequestContext = void 0;
var class_transformer_1 = require("class-transformer");
var auth_token_output_dto_1 = require("../../../auth/dtos/auth-token-output.dto");
var constants_1 = require("../../constants");
var request_context_dto_1 = require("../request-context.dto");
// Creates a RequestContext object from Request
function createRequestContext(request) {
    var ctx = new request_context_dto_1.RequestContext();
    ctx.requestID = request.header(constants_1.REQUEST_ID_TOKEN_HEADER);
    ctx.url = request.url;
    ctx.ip = request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        ? request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        : request.ip;
    // If request.user does not exist, we explicitly set it to null.
    ctx.user = request.user
        ? (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.UserAccessTokenClaims, request.user, {
            excludeExtraneousValues: true
        })
        : null;
    return ctx;
}
exports.createRequestContext = createRequestContext;
