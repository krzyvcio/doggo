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
exports.DogController = void 0;
const common_1 = require("@nestjs/common");
const dog_service_1 = require("./dog.service");
const create_dog_dto_1 = require("./dto/create-dog.dto");
const update_dog_dto_1 = require("./dto/update-dog.dto");
const guard_1 = require("../auth/guard");
const roles_guard_1 = require("../auth/guard/roles.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const client_1 = require("@prisma/client");
const decorator_1 = require("../auth/decorator");
let DogController = class DogController {
    constructor(dogService) {
        this.dogService = dogService;
    }
    async create(createDogDto) {
        return await this.dogService.create(createDogDto);
    }
    async findMyDogs(userId) {
        return await this.dogService.findMyDogs(userId);
    }
    async findAll() {
        return await this.dogService.findAll();
    }
    async findOneMyDog(id, userId) {
        return this.dogService.findOneMyDog(+id, userId);
    }
    async removeMyDog(id, userId) {
        return await this.dogService.removeMyDog(+id, userId);
    }
    async findOne(id) {
        return await this.dogService.findOne(+id);
    }
    async update(id, updateDogDto) {
        return await this.dogService.update(+id, updateDogDto);
    }
    async remove(id) {
        return await this.dogService.remove(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.DogOwner, client_1.UserRole.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_dto_1.CreateDogDto]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(client_1.UserRole.DogOwner, client_1.UserRole.Admin),
    (0, common_1.Get)('/my-dogs'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findMyDogs", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/my-dogs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findOneMyDog", null);
__decorate([
    (0, common_1.Delete)('/my-dogs/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "removeMyDog", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dog_dto_1.UpdateDogDto]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.JwtGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(client_1.UserRole.Admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DogController.prototype, "remove", null);
DogController = __decorate([
    (0, common_1.Controller)('dog'),
    __metadata("design:paramtypes", [dog_service_1.DogService])
], DogController);
exports.DogController = DogController;
//# sourceMappingURL=dog.controller.js.map