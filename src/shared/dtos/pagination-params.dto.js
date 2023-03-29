"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationParamsDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var PaginationParamsDto = /** @class */ (function () {
    function PaginationParamsDto() {
        this.limit = 100;
        this.offset = 0;
    }
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            description: 'Optional, defaults to 100',
            type: Number
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Min)(0),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return parseInt(value, 10);
        }, { toClassOnly: true })
    ], PaginationParamsDto.prototype, "limit");
    __decorate([
        (0, swagger_1.ApiPropertyOptional)({
            description: 'Optional, defaults to 0',
            type: Number
        }),
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Min)(0),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return parseInt(value, 10);
        }, { toClassOnly: true })
    ], PaginationParamsDto.prototype, "offset");
    return PaginationParamsDto;
}());
exports.PaginationParamsDto = PaginationParamsDto;
