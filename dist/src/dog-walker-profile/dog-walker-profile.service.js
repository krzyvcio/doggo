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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogWalkerProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DogWalkerProfileService = class DogWalkerProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDogWalkerProfileDto) {
        if (createDogWalkerProfileDto.userId) {
            const dogWalker = await this.prisma.dogWalkerProfile.create({
                data: {
                    userId: createDogWalkerProfileDto.userId,
                },
            });
            return dogWalker;
        }
    }
    async findAll() {
        const dogWalkerProfiles = await this.prisma.dogWalkerProfile.findMany({
            include: {
                user: true,
            },
        });
        return dogWalkerProfiles;
    }
    async findOne(id) {
        return await this.prisma.dogWalkerProfile.findUnique({
            where: {
                id,
            },
        });
    }
    async update(id, updateDogWalkerProfileDto) {
        return await this.prisma.dogWalkerProfile.update({
            where: {
                id,
            },
            data: Object.assign({}, updateDogWalkerProfileDto),
        });
    }
    async remove(id) {
        return await this.prisma.dogWalkerProfile.delete({
            where: {
                id,
            },
        });
    }
};
DogWalkerProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DogWalkerProfileService);
exports.DogWalkerProfileService = DogWalkerProfileService;
//# sourceMappingURL=dog-walker-profile.service.js.map