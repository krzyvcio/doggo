"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DatabaseModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var database_providers_1 = require("./database.providers");
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule_1 = DatabaseModule;
    DatabaseModule.forRoot = function (entities, options) {
        if (entities === void 0) { entities = []; }
        return {
            imports: [config_1.ConfigService],
            module: DatabaseModule_1,
            providers: __spreadArray([], database_providers_1.databaseProviders, true),
            exports: __spreadArray([], database_providers_1.databaseProviders, true)
        };
    };
    var DatabaseModule_1;
    DatabaseModule = DatabaseModule_1 = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRoot({
                    autoLoadEntities: true
                }),
            ],
            providers: __spreadArray([config_1.ConfigService], database_providers_1.databaseProviders, true),
            exports: __spreadArray([], database_providers_1.databaseProviders, true)
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
