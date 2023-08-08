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
exports.DogOwnerProfileService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DogOwnerProfileService = class DogOwnerProfileService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDogOwnerProfileDto) {
        if (createDogOwnerProfileDto.userId) {
            const dogOwner = await this.prisma.dogOwnerProfile.create({
                data: {
                    userId: createDogOwnerProfileDto.userId,
                },
            });
            return dogOwner;
        }
        else {
            throw new Error('No userId provided');
        }
    }
    async findAll() {
        const dogOwnerProfiles = await this.prisma.dogOwnerProfile.findMany({
            include: {
                user: true,
            },
        });
        return dogOwnerProfiles;
    }
    async findOne(id) {
        return await this.prisma.dogOwnerProfile.findUnique({
            where: {
                id,
            },
        });
    }
    async findByUserId(userId) {
        return await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
        });
    }
    async update(id, updateDogOwnerProfileDto) {
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.update({
            where: {
                id,
            },
            data: Object.assign({}, updateDogOwnerProfileDto),
        });
        return dogOwnerProfile;
    }
    async remove(id) {
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.delete({
            where: {
                id,
            },
        });
        return dogOwnerProfile;
    }
};
DogOwnerProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DogOwnerProfileService);
exports.DogOwnerProfileService = DogOwnerProfileService;
//# sourceMappingURL=dog-owner-profile.service.js.map