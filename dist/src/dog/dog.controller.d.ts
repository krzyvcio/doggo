import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
export declare class DogController {
    private readonly dogService;
    constructor(dogService: DogService);
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
    findMyDogs(userId: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOneMyDog(id: string, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    removeMyDog(id: string, userId: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: string, updateDogDto: UpdateDogDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        breedId: number;
        age: number;
        image: string;
        dogOwnerProfileId: number;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
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
