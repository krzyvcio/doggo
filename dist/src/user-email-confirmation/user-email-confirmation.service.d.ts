import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserEmailConfirmationService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        token: string;
        expiresAt: Date;
        createdAt: Date;
    }, unknown, never> & {}>;
    findOne(id: number): Promise<void>;
    verify(token: string): Promise<boolean>;
    verifyUser(token: string): Promise<boolean>;
    delete(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        token: string;
        expiresAt: Date;
        createdAt: Date;
    }, unknown, never> & {}>;
}
