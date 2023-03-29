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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
var req_context_decorator_1 = require("../../shared/request-context/req-context.decorator");
var auth_register_output_dto_1 = require("../dtos/auth-register-output.dto");
var auth_token_output_dto_1 = require("../dtos/auth-token-output.dto");
var jwt_refresh_guard_1 = require("../guards/jwt-refresh.guard");
var local_auth_guard_1 = require("../guards/local-auth.guard");
var AuthController = /** @class */ (function () {
    function AuthController(authService, logger) {
        this.authService = authService;
        this.logger = logger;
        this.logger.setContext(AuthController_1.name);
    }
    AuthController_1 = AuthController;
    AuthController.prototype.login = function (ctx, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    credential) {
        this.logger.log(ctx, "".concat(this.login.name, " was called"));
        var authToken = this.authService.login(ctx);
        return { data: authToken, meta: {} };
    };
    AuthController.prototype.registerLocal = function (ctx, input) {
        return __awaiter(this, void 0, void 0, function () {
            var registeredUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.register(ctx, input)];
                    case 1:
                        registeredUser = _a.sent();
                        return [2 /*return*/, { data: registeredUser, meta: {} }];
                }
            });
        });
    };
    AuthController.prototype.refreshToken = function (ctx, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    credential) {
        return __awaiter(this, void 0, void 0, function () {
            var authToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(ctx, "".concat(this.refreshToken.name, " was called"));
                        return [4 /*yield*/, this.authService.refreshToken(ctx)];
                    case 1:
                        authToken = _a.sent();
                        return [2 /*return*/, { data: authToken, meta: {} }];
                }
            });
        });
    };
    var AuthController_1;
    __decorate([
        (0, common_1.Post)("login"),
        (0, swagger_1.ApiOperation)({
            summary: "User login API"
        }),
        (0, swagger_1.ApiResponse)({
            status: common_1.HttpStatus.OK,
            type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_token_output_dto_1.AuthTokenOutput)
        }),
        (0, swagger_1.ApiResponse)({
            status: common_1.HttpStatus.UNAUTHORIZED,
            type: base_api_response_dto_1.BaseApiErrorResponse
        }),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
        (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
        __param(0, (0, req_context_decorator_1.ReqContext)()),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "login");
    __decorate([
        (0, common_1.Post)("register"),
        (0, swagger_1.ApiOperation)({
            summary: "User registration API"
        }),
        (0, swagger_1.ApiResponse)({
            status: common_1.HttpStatus.CREATED,
            type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_register_output_dto_1.RegisterOutput)
        }),
        __param(0, (0, req_context_decorator_1.ReqContext)()),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "registerLocal");
    __decorate([
        (0, common_1.Post)("refresh-token"),
        (0, swagger_1.ApiOperation)({
            summary: "Refresh access token API"
        }),
        (0, swagger_1.ApiResponse)({
            status: common_1.HttpStatus.OK,
            type: (0, base_api_response_dto_1.SwaggerBaseApiResponse)(auth_token_output_dto_1.AuthTokenOutput)
        }),
        (0, swagger_1.ApiResponse)({
            status: common_1.HttpStatus.UNAUTHORIZED,
            type: base_api_response_dto_1.BaseApiErrorResponse
        }),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        (0, common_1.UseGuards)(jwt_refresh_guard_1.JwtRefreshGuard),
        (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
        __param(0, (0, req_context_decorator_1.ReqContext)()),
        __param(1, (0, common_1.Body)())
    ], AuthController.prototype, "refreshToken");
    AuthController = AuthController_1 = __decorate([
        (0, swagger_1.ApiTags)("auth"),
        (0, common_1.Controller)("auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
