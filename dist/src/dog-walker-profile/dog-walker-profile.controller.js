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
exports.DogWalkerProfileController = void 0;
const common_1 = require("@nestjs/common");
const dog_walker_profile_service_1 = require("./dog-walker-profile.service");
const create_dog_walker_profile_dto_1 = require("./dto/create-dog-walker-profile.dto");
const update_dog_walker_profile_dto_1 = require("./dto/update-dog-walker-profile.dto");
let DogWalkerProfileController = class DogWalkerProfileController {
    constructor(dogWalkerProfileService) {
        this.dogWalkerProfileService = dogWalkerProfileService;
    }
    create(createDogWalkerProfileDto) {
        return this.dogWalkerProfileService.create(createDogWalkerProfileDto);
    }
    findAll() {
        return this.dogWalkerProfileService.findAll();
    }
    findOne(id) {
        return this.dogWalkerProfileService.findOne(+id);
    }
    update(id, updateDogWalkerProfileDto) {
        return this.dogWalkerProfileService.update(+id, updateDogWalkerProfileDto);
    }
    remove(id) {
        return this.dogWalkerProfileService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dog_walker_profile_dto_1.CreateDogWalkerProfileDto]),
    __metadata("design:returntype", void 0)
], DogWalkerProfileController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DogWalkerProfileController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DogWalkerProfileController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dog_walker_profile_dto_1.UpdateDogWalkerProfileDto]),
    __metadata("design:returntype", void 0)
], DogWalkerProfileController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DogWalkerProfileController.prototype, "remove", null);
DogWalkerProfileController = __decorate([
    (0, common_1.Controller)('dog-walker-profile'),
    __metadata("design:paramtypes", [dog_walker_profile_service_1.DogWalkerProfileService])
], DogWalkerProfileController);
exports.DogWalkerProfileController = DogWalkerProfileController;
//# sourceMappingURL=dog-walker-profile.controller.js.map