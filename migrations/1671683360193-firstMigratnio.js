"use strict";
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
exports.firstMigratnio1671683360193 = void 0;
var firstMigratnio1671683360193 = /** @class */ (function () {
    function firstMigratnio1671683360193() {
        this.name = "firstMigratnio1671683360193";
    }
    firstMigratnio1671683360193.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"emailVerification\" (\"id\" SERIAL NOT NULL, \"token\" character varying(21) NOT NULL, \"userId\" integer NOT NULL, \"validUntil\" TIMESTAMP NOT NULL, \"isVerification\" boolean NOT NULL DEFAULT false, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"updatedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_2382546f971f52418d861080fe1\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"password_reset\" (\"id\" SERIAL NOT NULL, \"token\" character varying(21) NOT NULL, \"userId\" character varying NOT NULL, \"validUntil\" TIMESTAMP NOT NULL, \"isVerification\" boolean NOT NULL DEFAULT false, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_8515e60a2cc41584fa4784f52ce\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"phoneVerification\" (\"id\" SERIAL NOT NULL, \"code\" character varying(6) NOT NULL, \"userId\" integer NOT NULL, \"validUntil\" TIMESTAMP NOT NULL, \"isVerification\" boolean NOT NULL DEFAULT false, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_b7dfa760f38b0c9eb2781d26439\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"schedules\" (\"id\" SERIAL NOT NULL, \"name\" character varying, \"workDate\" TIMESTAMP, \"startHour\" TIMESTAMP, \"endHour\" TIMESTAMP, \"dayOfWeek\" integer, \"repeatDaysNumber\" integer, \"isHoliday\" boolean NOT NULL, \"isWeekend\" boolean NOT NULL, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_7e33fc2ea755a5765e3564e66dd\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"pet_owner\" (\"id\" SERIAL NOT NULL, \"rating\" double precision NOT NULL, CONSTRAINT \"PK_5116a00f46dd9097ed6bd8dd6a5\" PRIMARY KEY (\"id\"))")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"pet_walker\" (\"id\" SERIAL NOT NULL, \"rating\" double precision NOT NULL, CONSTRAINT \"PK_5260c910bb9b88432d47caaf89f\" PRIMARY KEY (\"id\"))")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"profile\" (\"id\" SERIAL NOT NULL, \"bio\" character varying NOT NULL, \"profileType\" character varying NOT NULL, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_3dd8bfc97e4a77c70971591bdcb\" PRIMARY KEY (\"id\"))")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"users\" (\"id\" SERIAL NOT NULL, \"username\" character varying(200) NOT NULL, \"email\" character varying(100) NOT NULL, \"passwordHash\" character varying NOT NULL, \"firstName\" character varying(200) NOT NULL, \"lastName\" character varying(200) NOT NULL, \"middleName\" character varying(100), \"image\" character varying NOT NULL, \"emailVerified\" boolean NOT NULL DEFAULT false, \"birthDate\" TIMESTAMP, \"phone\" character varying NOT NULL, \"registrationDate\" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, \"roles\" text NOT NULL, \"isAccountDisabled\" boolean NOT NULL, \"age\" integer NOT NULL, \"createdAt\" TIMESTAMP DEFAULT now(), \"updatedAt\" TIMESTAMP DEFAULT now(), CONSTRAINT \"username\" UNIQUE (\"username\"), CONSTRAINT \"email\" UNIQUE (\"email\"), CONSTRAINT \"PK_a3ffb1c0c8416b9fc6f907b7433\" PRIMARY KEY (\"id\"))")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"emailChange\" (\"id\" SERIAL NOT NULL, \"token\" character varying(21) NOT NULL, \"newEmail\" character varying NOT NULL, \"userId\" integer NOT NULL, \"validUntil\" TIMESTAMP NOT NULL, \"isVerification\" boolean NOT NULL DEFAULT false, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_6e8e3dcd4d8e4cdea67b9e6c6c1\" PRIMARY KEY (\"id\"))")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"pet\" (\"id\" SERIAL NOT NULL, \"name\" character varying NOT NULL, \"type\" integer NOT NULL DEFAULT '1', \"birthDate\" TIMESTAMP, \"photo\" character varying, \"createdAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, \"modifiedAt\" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT \"PK_b1ac2e88e89b9480e0c5b53fa60\" PRIMARY KEY (\"id\"))")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    firstMigratnio1671683360193.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DROP TABLE \"pet\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"emailChange\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"users\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"profile\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"pet_walker\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"pet_owner\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"schedules\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"phoneVerification\"")];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"password_reset\"")];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"emailVerification\"")];
                    case 10:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return firstMigratnio1671683360193;
}());
exports.firstMigratnio1671683360193 = firstMigratnio1671683360193;
