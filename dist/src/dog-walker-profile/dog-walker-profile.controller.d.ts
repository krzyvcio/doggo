import { DogWalkerProfileService } from './dog-walker-profile.service';
import { CreateDogWalkerProfileDto } from './dto/create-dog-walker-profile.dto';
import { UpdateDogWalkerProfileDto } from './dto/update-dog-walker-profile.dto';
export declare class DogWalkerProfileController {
    private readonly dogWalkerProfileService;
    constructor(dogWalkerProfileService: DogWalkerProfileService);
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
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: string, updateDogWalkerProfileDto: UpdateDogWalkerProfileDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        userId: number;
        bio: string;
        experience: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
