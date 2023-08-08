import { PrismaService } from 'src/prisma/prisma.service';
import { EmailService } from '../email/email.service';
export declare class UserPasswordResetService {
    private prisma;
    private emailService;
    constructor(prisma: PrismaService, emailService: EmailService);
    create(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        token: string;
        expiresAt: Date;
        createdAt: Date;
    }, unknown, never> & {}>;
    createAndSendEmail(email: string): Promise<void>;
    findOne(id: number): Promise<void>;
    verify(token: string): Promise<boolean>;
    resetPassword(email: string): Promise<void>;
    changePassword(newPassword: string, token: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: import(".prisma/client").UserRole[];
        firstName: string;
        lastName: string;
        image: string;
        dogOwnerProfileId: number;
        dogWalkerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
        isEmailConfirmed: boolean;
        isUserDeleted: boolean;
    }, unknown, never> & {}>;
}
