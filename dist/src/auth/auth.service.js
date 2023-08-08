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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const client_1 = require("@prisma/client");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const user_email_confirmation_service_1 = require("../user-email-confirmation/user-email-confirmation.service");
const email_service_1 = require("../email/email.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config, userConfirmationService, emailService) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
        this.userConfirmationService = userConfirmationService;
        this.emailService = emailService;
    }
    async register(dto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: {
                        set: [
                            client_1.UserRole.RegisteredUser,
                        ],
                    },
                },
            });
            this.userConfirmationService
                .create(user.id)
                .then((userConfirmation) => {
                console.log({
                    userConfirmation,
                });
                this.emailService.sendConfirmationEmail(userConfirmation.token, user.email);
            });
            if (dto.petOwner) {
                await this.prisma.dogOwnerProfile.create({
                    data: {
                        userId: user.id,
                    },
                });
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        roles: {
                            push: client_1.UserRole.DogOwner,
                        },
                    },
                });
            }
            if (dto.petWalker) {
                await this.prisma.dogWalkerProfile.create({
                    data: {
                        userId: user.id,
                    },
                });
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        roles: {
                            push: client_1.UserRole.DogWalker,
                        },
                    },
                });
            }
            return this.signToken(user.id, user.email);
        }
        catch (error) {
            if (error instanceof
                client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const pwMatches = await argon.verify(user.password, dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Credentials incorrect');
        return this.signToken(user.id, user.email);
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: this.config.get('JWT_EXPIRATION_TIME'),
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    async refreshToken(user) {
        const payload = {
            sub: user.id,
            email: user.email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: this.config.get('JWT_EXPIRATION_TIME'),
            secret: secret,
        });
        return {
            access_token: token,
        };
    }
    async logout() {
        return {
            message: 'Logged out',
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService,
        user_email_confirmation_service_1.UserEmailConfirmationService,
        email_service_1.EmailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map