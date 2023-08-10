import { RegisterDto } from './dto';
import { UserRole } from '@prisma/client';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserEmailConfirmationService } from '../user-email-confirmation/user-email-confirmation.service';
import { EmailService } from '../email/email.service';
import { AuthService } from './auth.service';
import { ForbiddenException } from '@nestjs/common';
import { RequestContext } from '../shared/request-context/request-context.dto';

describe('UserService', () => {
    let userService: UserService;
    let prismaService: PrismaService;
    let userConfirmationService: UserEmailConfirmationService;
    let emailService: EmailService;
    let authService: AuthService;
    let ctx: RequestContext;

    beforeEach(() => {
        prismaService = new PrismaService();
        userConfirmationService =
            new UserEmailConfirmationService();
        emailService = new EmailService();
        userService = new UserService(
            prismaService,
            userConfirmationService,
            emailService,
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('register', () => {
        it('should register a new user with pet owner role', async () => {
            // Arrange
            const ctx = {}; // Mock the RequestContext if needed
            const dto: RegisterDto = {
                email: 'michal@rusin.dev',
                password: '!23Haslo',
                firstName: 'John',
                lastName: 'Doe',
                petOwner: true,
                petWalker: false,
            };

            const createSpy = jest
                .spyOn(
                    prismaService.user,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'user-id',
                    email: dto.email,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: [
                        UserRole.RegisteredUser,
                        UserRole.DogOwner,
                    ],
                });

            const createProfileSpy = jest
                .spyOn(
                    prismaService.dogOwnerProfile,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'profile-id',
                    userId: 'user-id',
                });

            const updateSpy = jest
                .spyOn(
                    prismaService.user,
                    'update',
                )
                .mockResolvedValueOnce({
                    id: 'user-id',
                    email: dto.email,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: [
                        UserRole.RegisteredUser,
                        UserRole.DogOwner,
                    ],
                    dogOwnerProfileId:
                        'profile-id',
                });

            const createConfirmationSpy = jest
                .spyOn(
                    userConfirmationService,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'confirmation-id',
                    userId: 'user-id',
                    token: 'confirmation-token',
                });

            const sendEmailSpy = jest
                .spyOn(
                    emailService,
                    'sendConfirmationEmail',
                )
                .mockImplementation();

            // Act
            const result =
                await authService.register(
                    ctx,
                    dto,
                );

            // Assert
            expect(
                createSpy,
            ).toHaveBeenCalledWith({
                data: {
                    email: dto.email,
                    password: expect.any(String),
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: {
                        set: [
                            UserRole.RegisteredUser,
                        ],
                    },
                },
            });

            expect(
                createConfirmationSpy,
            ).toHaveBeenCalledWith('user-id');
            expect(
                sendEmailSpy,
            ).toHaveBeenCalledWith(
                'confirmation-token',
                dto.email,
            );
            expect(
                createProfileSpy,
            ).toHaveBeenCalledWith({
                data: {
                    userId: 'user-id',
                },
            });

            expect(
                updateSpy,
            ).toHaveBeenCalledWith({
                where: {
                    id: 'user-id',
                },
                data: {
                    dogOwnerProfileId:
                        'profile-id',
                    roles: {
                        push: UserRole.DogOwner,
                    },
                },
            });

            expect(result).toEqual(
                expect.any(String),
            ); // Assuming signToken returns a string
        });

        it('should register a new user with pet walker role', async () => {
            // Arrange
            const ctx = {}; // Mock the RequestContext if needed
            const dto: RegisterDto = {
                email: 'test@example.com',
                password: 'password',
                firstName: 'John',
                lastName: 'Doe',
                petOwner: false,
                petWalker: true,
            };

            const createSpy = jest
                .spyOn(
                    prismaService.user,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'user-id',
                    email: dto.email,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: [
                        UserRole.RegisteredUser,
                        UserRole.DogWalker,
                    ],
                });

            const createProfileSpy = jest
                .spyOn(
                    prismaService.dogWalkerProfile,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'profile-id',
                    userId: 'user-id',
                });

            const updateSpy = jest
                .spyOn(
                    prismaService.user,
                    'update',
                )
                .mockResolvedValueOnce({
                    id: 'user-id',
                    email: dto.email,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: [
                        UserRole.RegisteredUser,
                        UserRole.DogWalker,
                    ],
                    dogWalkerProfileId:
                        'profile-id',
                });

            const createConfirmationSpy = jest
                .spyOn(
                    userConfirmationService,
                    'create',
                )
                .mockResolvedValueOnce({
                    id: 'confirmation-id',
                    userId: 'user-id',
                    token: 'confirmation-token',
                });

            const sendEmailSpy = jest
                .spyOn(
                    emailService,
                    'sendConfirmationEmail',
                )
                .mockImplementation();

            // Act
            const result =
                await authService.register(
                    ctx,
                    dto,
                );

            // Assert
            expect(
                createSpy,
            ).toHaveBeenCalledWith({
                data: {
                    email: dto.email,
                    password: expect.any(String),
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: {
                        set: [
                            UserRole.RegisteredUser,
                        ],
                    },
                },
            });

            expect(
                createConfirmationSpy,
            ).toHaveBeenCalledWith('user-id');
            expect(
                sendEmailSpy,
            ).toHaveBeenCalledWith(
                'confirmation-token',
                dto.email,
            );
            expect(
                createProfileSpy,
            ).toHaveBeenCalledWith({
                data: {
                    userId: 'user-id',
                },
            });

            expect(
                updateSpy,
            ).toHaveBeenCalledWith({
                where: {
                    id: 'user-id',
                },
                data: {
                    dogWalkerProfileId:
                        'profile-id',
                    roles: {
                        push: UserRole.DogWalker,
                    },
                },
            });

            expect(result).toEqual(
                expect.any(String),
            ); // Assuming signToken returns a string
        });

        it('should throw ForbiddenException if email is taken', async () => {
            // Arrange
            const ctx = {}; // Mock the RequestContext if needed
            const dto: RegisterDto = {
                email: 'test@example.com',
                password: 'password',
                firstName: 'John',
                lastName: 'Doe',
                petOwner: false,
                petWalker: false,
            };

            const createSpy = jest
                .spyOn(
                    prismaService.user,
                    'create',
                )
                .mockRejectedValueOnce({
                    code: 'P2002',
                });

            // Act & Assert
            await expect(
                authService.register(ctx, dto),
            ).rejects.toThrow(ForbiddenException);
            expect(
                createSpy,
            ).toHaveBeenCalledWith({
                data: {
                    email: dto.email,
                    password: expect.any(String),
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    roles: {
                        set: [
                            UserRole.RegisteredUser,
                        ],
                    },
                },
            });
        });
    });
});
