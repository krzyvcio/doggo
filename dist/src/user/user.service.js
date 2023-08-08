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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async editUser(userId, dto) {
        const user = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: Object.assign({}, dto),
        });
        delete user.password;
        return user;
    }
    async getAllUsers(limit) {
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                email: true,
            },
            take: limit,
        });
        return users;
    }
    async getUserById(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
    async deleteUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (user) {
            const dogWalkerProfile = await this.prisma.dogWalkerProfile.findUnique({
                where: {
                    userId: userId,
                },
            });
            if (dogWalkerProfile) {
                await this.prisma.dogWalkerProfile.delete({
                    where: {
                        id: dogWalkerProfile.id,
                    },
                });
            }
            const dogOwnerProfile = await this.prisma.dogOwnerProfile.findUnique({
                where: {
                    userId: userId,
                },
            });
            if (dogOwnerProfile) {
                await this.prisma.dogOwnerProfile.delete({
                    where: {
                        id: dogOwnerProfile.id,
                    },
                });
            }
        }
        return user;
    }
    async deleteAllUsers() {
        const users = await this.prisma.user.deleteMany();
        return users;
    }
    async getUserWithProfile(userId) {
        return null;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map