import { CreateDogOwnerProfileDto } from './dto/create-dog-owner-profile.dto';
import { UpdateDogOwnerProfileDto } from './dto/update-dog-owner-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DogOwnerProfileService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDogOwnerProfileDto: CreateDogOwnerProfileDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        dogsOwned: number;
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
        dogsOwned: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        dogsOwned: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findByUserId(userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        dogsOwned: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: number, updateDogOwnerProfileDto: UpdateDogOwnerProfileDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        dogsOwned: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        dogsOwned: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
