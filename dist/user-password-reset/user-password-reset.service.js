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
exports.UserPasswordResetService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const uuidv4_1 = require("uuidv4");
const argon = require("argon2");
const runtime_1 = require("@prisma/client/runtime");
const email_service_1 = require("../email/email.service");
let UserPasswordResetService = class UserPasswordResetService {
    constructor(prisma, emailService) {
        this.prisma = prisma;
        this.emailService = emailService;
    }
    async create(userId) {
        if (!userId) {
            throw new Error('User id is required');
        }
        const date = new Date();
        date.setDate(date.getDate() + 7);
        const userPasswordReset = await this.prisma.userPasswordReset.create({
            data: {
                userId,
                token: (0, uuidv4_1.uuid)(),
                expiresAt: date,
            },
        });
        return userPasswordReset;
    }
    async createAndSendEmail(email) {
        if (!email) {
            throw new Error('User id is required');
        }
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true,
                email: true,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const userPasswordReset = await this.create(user.id);
        await this.emailService.sendResetPasswordEmail(user.email, userPasswordReset.token);
    }
    async findOne(id) {
        const userPasswordReset = await this.prisma.userPasswordReset.findUnique({
            where: {
                id: id,
            },
        });
    }
    async verify(token) {
        const userPasswordReset = await this.prisma.userPasswordReset.findUnique({
            where: {
                token: token,
            },
        });
        if (!userPasswordReset) {
            return false;
        }
        if (userPasswordReset.expiresAt <
            new Date()) {
            return false;
        }
        return true;
    }
    async resetPassword(email) {
        if (!email) {
            throw new Error('Email is required');
        }
        const user = await this.prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!user) {
            throw new Error('User not found');
        }
        const userPasswordReset = await this.create(user.id);
    }
    async changePassword(newPassword, token) {
        try {
            const userPasswordReset = await this.prisma.userPasswordReset.findUnique({
                where: {
                    token: token,
                },
            });
            if (!userPasswordReset) {
                throw new Error('Token is invalid');
            }
            if (userPasswordReset.expiresAt <
                new Date()) {
                throw new Error('Token is expired');
            }
            const user = await this.prisma.user.findUnique({
                where: {
                    id: userPasswordReset.userId,
                },
            });
            if (!user) {
                throw new Error('User not found');
            }
            const newPasswordHash = await argon.hash(newPassword);
            const updatedUser = await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    password: newPasswordHash,
                },
            });
            await this.prisma.userPasswordReset.delete({
                where: {
                    id: userPasswordReset.id,
                },
            });
            return updatedUser;
        }
        catch (e) {
            if (e instanceof
                runtime_1.PrismaClientKnownRequestError) {
                throw new Error('Token is invalid');
            }
        }
    }
};
UserPasswordResetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        email_service_1.EmailService])
], UserPasswordResetService);
exports.UserPasswordResetService = UserPasswordResetService;
//# sourceMappingURL=user-password-reset.service.js.map