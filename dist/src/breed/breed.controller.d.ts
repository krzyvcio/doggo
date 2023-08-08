import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
export declare class BreedController {
    private readonly breedService;
    constructor(breedService: BreedService);
    create(createBreedDto: CreateBreedDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: string, updateBreedDto: UpdateBreedDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
