import { UserPasswordResetService } from './user-password-reset.service';
export declare class UserPasswordResetController {
    private readonly userPasswordResetService;
    constructor(userPasswordResetService: UserPasswordResetService);
    resetPassword(email: string): Promise<void | {
        message: string;
    }>;
    create(userId: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        token: string;
        expiresAt: Date;
        createdAt: Date;
    }, unknown, never> & {}) | {
        message: string;
    }>;
    verify(password: string, token: string): Promise<{
        message: string;
    }>;
}
