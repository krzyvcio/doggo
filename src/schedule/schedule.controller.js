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
exports.__esModule = true;
exports.ScheduleController = void 0;
var common_1 = require("@nestjs/common");
var ScheduleController = /** @class */ (function () {
    function ScheduleController(scheduleService) {
        this.scheduleService = scheduleService;
    }
    ScheduleController.prototype.create = function (createScheduleDto) {
        return this.scheduleService.create(createScheduleDto);
    };
    ScheduleController.prototype.findAll = function () {
        return this.scheduleService.findAll();
    };
    ScheduleController.prototype.findOne = function (id) {
        return this.scheduleService.findOne(+id);
    };
    ScheduleController.prototype.update = function (id, updateScheduleDto) {
        return this.scheduleService.update(+id, updateScheduleDto);
    };
    ScheduleController.prototype.remove = function (id) {
        return this.scheduleService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ScheduleController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ScheduleController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], ScheduleController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(":id"),
        __param(0, (0, common_1.Param)("id")),
        __param(1, (0, common_1.Body)())
    ], ScheduleController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(":id"),
        __param(0, (0, common_1.Param)("id"))
    ], ScheduleController.prototype, "remove");
    ScheduleController = __decorate([
        (0, common_1.Controller)("schedule")
    ], ScheduleController);
    return ScheduleController;
}());
exports.ScheduleController = ScheduleController;
