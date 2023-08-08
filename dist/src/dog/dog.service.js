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
exports.DogService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let DogService = class DogService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDogDto) {
        const { userId, name, age, breedId, image, } = createDogDto;
        if (!userId)
            throw new Error('User id is required');
        if (!name)
            throw new Error('Name is required');
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
            select: {
                id: true,
            },
        });
        if (!dogOwnerProfile)
            throw new Error('Dog owner profile not found');
        if (dogOwnerProfile) {
            const dog = await this.prisma.dog.create({
                data: {
                    dogOwnerProfileId: dogOwnerProfile.id,
                    name,
                    age,
                    breedId,
                    image,
                },
            });
            return dog;
        }
    }
    async findAll(limit) {
        const dogs = await this.prisma.dog.findMany({
            take: limit,
        });
        return dogs;
    }
    async findOneMyDog(id, userId) {
        const dog = await this.prisma.dog.findUnique({
            where: {
                id,
            },
        });
        if (!dog)
            throw new Error('Dog not found');
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
        });
        if (dogOwnerProfile.userId !== userId)
            throw new Error('You are not the owner of this dog');
        return dog;
    }
    async findMyDogs(userId, limit) {
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
            select: {
                id: true,
            },
        });
        if (!dogOwnerProfile)
            throw new Error('Dog owner profile not found');
        const dogs = await this.prisma.dog.findMany({
            where: {
                dogOwnerProfileId: dogOwnerProfile.id,
            },
            take: limit,
        });
        return dogs;
    }
    async findAllByUserId(userId, limit) {
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
            select: {
                id: true,
            },
        });
        if (!dogOwnerProfile)
            throw new Error('Dog owner profile not found');
        const dogs = await this.prisma.dog.findMany({
            where: {
                dogOwnerProfileId: dogOwnerProfile.id,
            },
            take: limit,
        });
        return dogs;
    }
    async findOne(id) {
        const dog = await this.prisma.dog.findUnique({
            where: {
                id,
            },
        });
        return dog;
    }
    async update(id, updateDogDto) {
        const { name, age, breedId, image } = updateDogDto;
        const dog = await this.prisma.dog.update({
            where: {
                id,
            },
            data: {
                name,
                age,
                breedId,
                image,
            },
        });
        return dog;
    }
    async removeMyDog(id, userId) {
        const dog = await this.prisma.dog.findUnique({
            where: {
                id,
            },
        });
        if (!dog)
            throw new Error('Dog not found');
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
        });
        if (dogOwnerProfile.userId !== userId)
            throw new Error('You are not the owner of this dog');
        const deletedDog = await this.prisma.dog.delete({
            where: {
                id,
            },
        });
        return deletedDog;
    }
    async updateMyDog(id, userId, updateDogDto) {
        const { name, age, breedId, image } = updateDogDto;
        const dog = await this.prisma.dog.findUnique({
            where: {
                id,
            },
        });
        if (!dog)
            throw new Error('Dog not found');
        const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
            where: {
                userId,
            },
        });
        if (dogOwnerProfile.userId !== userId)
            throw new Error('You are not the owner of this dog');
        const updatedDog = await this.prisma.dog.update({
            where: {
                id,
            },
            data: {
                name,
                age,
                breedId,
                image,
            },
        });
        return updatedDog;
    }
    async remove(id) {
        const dog = await this.prisma.dog.delete({
            where: {
                id,
            },
        });
        return dog;
    }
};
DogService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DogService);
exports.DogService = DogService;
//# sourceMappingURL=dog.service.js.map