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
exports.UserEmailConfirmationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
const runtime_1 = require("@prisma/client/runtime");
let UserEmailConfirmationService = class UserEmailConfirmationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId) {
        if (!userId) {
            throw new Error('User id is required');
        }
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const userConfirmation = await this.prisma.userEmailConfirmation.create({
            data: {
                userId,
                token: (0, uuid_1.v4)(),
                expiresAt: date,
            },
        });
        return userConfirmation;
    }
    async findOne(id) {
        const userConfirmation = await this.prisma.userEmailConfirmation.findUnique({
            where: {
                id: id,
            },
        });
    }
    async verify(token) {
        const userConfirmation = await this.prisma.userEmailConfirmation.findUnique({
            where: {
                token: token,
            },
        });
        if (!userConfirmation) {
            return false;
        }
        if (userConfirmation.expiresAt <
            new Date()) {
            return false;
        }
        return true;
    }
    async verifyUser(token) {
        try {
            const userConfirmation = await this.prisma.userEmailConfirmation.findUnique({
                where: {
                    token: token,
                },
            });
            if (!userConfirmation) {
                return false;
            }
            if (userConfirmation.expiresAt <
                new Date()) {
                return false;
            }
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userConfirmation.userId,
                },
            });
            if (!user) {
                return false;
            }
            await this.prisma.user.update({
                where: {
                    id: userConfirmation.userId,
                },
                data: {
                    isEmailConfirmed: true,
                },
            });
            await this.prisma.userEmailConfirmation.delete({
                where: {
                    id: userConfirmation.id,
                },
            });
            return true;
        }
        catch (e) {
            if (e instanceof
                runtime_1.PrismaClientKnownRequestError)
                return false;
        }
    }
    async delete(id) {
        const userConfirmation = await this.prisma.userEmailConfirmation.delete({
            where: {
                id: id,
            },
        });
        return userConfirmation;
    }
};
UserEmailConfirmationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserEmailConfirmationService);
exports.UserEmailConfirmationService = UserEmailConfirmationService;
//# sourceMappingURL=user-email-confirmation.service.js.map