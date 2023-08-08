import { User, UserRole } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMe(user: User): import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: UserRole[];
        firstName: string;
        lastName: string;
        image: string;
        dogOwnerProfileId: number;
        dogWalkerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
        isEmailConfirmed: boolean;
        isUserDeleted: boolean;
    }, unknown, never> & {};
    editUser(userId: number, dto: EditUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: UserRole[];
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
    getAllUsers(): Promise<{
        id: number;
        email: string;
    }[]>;
    getUserById(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: UserRole[];
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
        roles: UserRole[];
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
    deleteUserById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        phone: string;
        roles: UserRole[];
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
