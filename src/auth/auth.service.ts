import {
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import {
    Prisma,
    User,
    UserRole,
} from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserEmailConfirmationService } from 'src/user-email-confirmation/user-email-confirmation.service';
import { EmailService } from 'src/email/email.service';
import { AppLogger } from '../shared/logger/logger.service';
import { RequestContext } from '../shared/request-context/request-context.dto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
        private userConfirmationService: UserEmailConfirmationService,
        private emailService: EmailService,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(AuthService.name);
    }

    async register(
        ctx: RequestContext,
        dto: RegisterDto,
    ) {
        // generate the password hash
        const hash = await argon.hash(
            dto.password,
        );
        this.logger.log(ctx, 'register service');
        // save the new user in the db
        //prisma transaction

        try {
            const user =
                await this.prisma.user.create({
                    data: {
                        email: dto.email,
                        password: hash,
                        firstName: dto.firstName,
                        lastName: dto.lastName,
                        roles: {
                            set: [
                                UserRole.RegisteredUser,
                            ],
                        },
                    },
                });

            //create user email confirmation
            this.userConfirmationService
                .create(user.id)
                .then((userConfirmation) => {
                    console.log({
                        userConfirmation,
                    });
                    this.emailService.sendConfirmationEmail(
                        userConfirmation.token,
                        user.email,
                    );
                });

            if (dto.petWalker) {
                const dogWalkerProfile =
                    await this.prisma.dogWalkerProfile.create(
                        {
                            data: {
                                userId: user.id,
                            },
                        },
                    );
                //add role to user push do field roles
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        dogWalkerProfileId:
                            dogWalkerProfile.id,
                        roles: {
                            push: UserRole.DogWalker,
                        },
                    },
                });
            }

            if (dto.petOwner) {
                const dogOwnerProfile =
                    await this.prisma.dogOwnerProfile.create(
                        {
                            data: {
                                userId: user.id,
                            },
                        },
                    );
                await this.prisma.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        dogOwnerProfileId:
                            dogOwnerProfile.id,
                        roles: {
                            push: UserRole.DogOwner,
                        },
                    },
                });
            }

            return this.signToken(
                user.id,
                user.email,
            );
        } catch (error) {
            if (
                error instanceof
                Prisma.PrismaClientKnownRequestError
            ) {
                //if email is taken throw exception
                if (error.code === 'P2002') {
                    throw new ForbiddenException(
                        'Credentials taken',
                    );
                }
            }
            throw error;
        }
    }

    async login(
        ctx: RequestContext,
        dto: LoginDto,
    ) {
        this.logger.log(ctx, 'login service');
        // find the user by email
        const user =
            await this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                },
            });
        // if user does not exist throw exception
        if (!user)
            throw new ForbiddenException(
                'Credentials incorrect',
            );

        // compare password
        const pwMatches = await argon.verify(
            user.password,
            dto.password,
        );
        // if password incorrect throw exception
        if (!pwMatches)
            throw new ForbiddenException(
                'Credentials incorrect',
            );
        return this.signToken(
            user.id,
            user.email,
        );
    }

    async signToken(
        userId: number,
        email: string,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };
        const secret =
            this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: this.config.get(
                    'JWT_EXPIRATION_TIME',
                ),
                secret: secret,
            },
        );

        return {
            access_token: token,
        };
    }

    async refreshToken(
        user: User,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: user.id,
            email: user.email,
        };
        const secret =
            this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: this.config.get(
                    'JWT_EXPIRATION_TIME',
                ),
                secret: secret,
            },
        );

        return {
            access_token: token,
        };
    }

    async logout() {
        return {
            message: 'Logged out',
        };
    }
}
