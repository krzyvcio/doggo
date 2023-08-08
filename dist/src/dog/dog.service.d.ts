import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class DogService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDogDto: CreateDogDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(limit?: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOneMyDog(id: number, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findMyDogs(userId: number, limit?: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findAllByUserId(userId: number, limit?: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: number, updateDogDto: UpdateDogDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    removeMyDog(id: number, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    updateMyDog(id: number, userId: number, updateDogDto: UpdateDogDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
