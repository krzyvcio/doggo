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
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var role_constant_1 = require("../constants/role.constant");
var auth_register_output_dto_1 = require("../dtos/auth-register-output.dto");
var auth_token_output_dto_1 = require("../dtos/auth-token-output.dto");
var AuthService = /** @class */ (function () {
    function AuthService(userService, jwtService, configService, logger) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = logger;
        this.logger.setContext(AuthService_1.name);
    }
    AuthService_1 = AuthService;
    AuthService.prototype.validateUser = function (ctx, username, pass) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(ctx, "".concat(this.validateUser.name, " was called"));
                        return [4 /*yield*/, this.userService.validateUsernamePassword(ctx, username, pass)];
                    case 1:
                        user = _a.sent();
                        // Prevent disabled users from logging in.
                        if (user.isAccountDisabled) {
                            throw new common_1.UnauthorizedException("This user account has been disabled");
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    AuthService.prototype.login = function (ctx) {
        this.logger.log(ctx, "".concat(this.login.name, " was called"));
        return this.getAuthToken(ctx, ctx.user);
    };
    AuthService.prototype.register = function (ctx, input) {
        return __awaiter(this, void 0, void 0, function () {
            var registeredUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(ctx, "".concat(this.register.name, " was called"));
                        // TODO : Setting default role as USER here. Will add option to change this later via ADMIN users.
                        input.roles = [role_constant_1.ROLE.USER];
                        input.isAccountDisabled = false;
                        return [4 /*yield*/, this.userService.createUser(ctx, input)];
                    case 1:
                        registeredUser = _a.sent();
                        return [2 /*return*/, (0, class_transformer_1.plainToClass)(auth_register_output_dto_1.RegisterOutput, registeredUser, {
                                excludeExtraneousValues: true
                            })];
                }
            });
        });
    };
    AuthService.prototype.refreshToken = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.log(ctx, "".concat(this.refreshToken.name, " was called"));
                        return [4 /*yield*/, this.userService.findById(ctx, ctx.user.id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.UnauthorizedException("Invalid user id");
                        }
                        return [2 /*return*/, this.getAuthToken(ctx, user)];
                }
            });
        });
    };
    AuthService.prototype.getAuthToken = function (ctx, user) {
        this.logger.log(ctx, "".concat(this.getAuthToken.name, " was called"));
        var subject = { sub: user.id };
        var payload = {
            username: user.username,
            sub: user.id,
            roles: user.roles
        };
        var authToken = {
            refreshToken: this.jwtService.sign(subject, {
                expiresIn: this.configService.get("jwt.refreshTokenExpiresInSec")
            }),
            accessToken: this.jwtService.sign(__assign(__assign({}, payload), subject), { expiresIn: this.configService.get("jwt.accessTokenExpiresInSec") })
        };
        return (0, class_transformer_1.plainToClass)(auth_token_output_dto_1.AuthTokenOutput, authToken, {
            excludeExtraneousValues: true
        });
    };
    var AuthService_1;
    AuthService = AuthService_1 = __decorate([
        (0, common_1.Injectable)()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
