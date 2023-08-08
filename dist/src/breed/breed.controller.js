"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreedController = void 0;
const common_1 = require("@nestjs/common");
const breed_service_1 = require("./breed.service");
const create_breed_dto_1 = require("./dto/create-breed.dto");
const update_breed_dto_1 = require("./dto/update-breed.dto");
const guard_1 = require("../auth/guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const client_1 = require("@prisma/client");
let BreedController = class BreedController {
    constructor(breedService) {
        this.breedService = breedService;
    }
    async create(createBreedDto) {
        return await this.breedService.create(createBreedDto);
    }
    async findAll() {
        return await this.breedService.findAll();
    }
    async findOne(id) {
        return await this.breedService.findOne(+id);
    }
    async update(id, updateBreedDto) {
        return await this.breedService.update(+id, updateBreedDto);
    }
    async remove(id) {
        return await this.breedService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_breed_dto_1.CreateBreedDto]),
    __metadata("design:returntype", Promise)
], BreedController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BreedController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BreedController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_breed_dto_1.UpdateBreedDto]),
    __metadata("design:returntype", Promise)
], BreedController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BreedController.prototype, "remove", null);
BreedController = __decorate([
    (0, common_1.Controller)('breed'),
    __metadata("design:paramtypes", [breed_service_1.BreedService])
], BreedController);
exports.BreedController = BreedController;
//# sourceMappingURL=breed.controller.js.map