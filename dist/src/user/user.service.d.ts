import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: number, dto: EditUserDto): Promise<import("@prisma/client/runtime").GetResult<{
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
    getAllUsers(limit?: number): Promise<{
        id: number;
        email: string;
    }[]>;
    getUserById(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    getUserByEmail(email: string): Promise<import("@prisma/client/runtime").GetResult<{
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
    deleteUser(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
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
    deleteAllUsers(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    getUserWithProfile(userId: number): Promise<any>;
}
