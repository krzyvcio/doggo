import { CreateDogWalkerProfileDto } from './dto/create-dog-walker-profile.dto';
import { UpdateDogWalkerProfileDto } from './dto/update-dog-walker-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DogWalkerProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDogWalkerProfileDto: CreateDogWalkerProfileDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<({
        user: import("@prisma/client/runtime").GetResult<{
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
        }, unknown, never> & {};
    } & import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: number, updateDogWalkerProfileDto: UpdateDogWalkerProfileDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
