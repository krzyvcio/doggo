import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class BreedService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBreedDto: CreateBreedDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    findAll(limit?: number, offset?: number): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    update(id: number, updateBreedDto: UpdateBreedDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        name: string;
        englishName: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    seed(): Promise<number>;
}
