import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { JwtGuard } from '../auth/guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { UserRole } from '@prisma/client';
import { GetUser } from '../auth/decorator';

@Controller('dog')
export class DogController {
    constructor(
        private readonly dogService: DogService,
    ) {}

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.DogOwner, UserRole.Admin)
    @Post()
    async create(
        @Body() createDogDto: CreateDogDto,
    ) {
        return await this.dogService.create(
            createDogDto,
        );
    }

    @Roles(UserRole.DogOwner, UserRole.Admin)
    @Get('/my-dogs')
    async findMyDogs(
        @GetUser('id') userId: number,
    ) {
        return await this.dogService.findMyDogs(
            userId,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Get('/all')
    async findAll() {
        return await this.dogService.findAll();
    }

    @Get('/my-dogs/:id')
    async findOneMyDog(
        @Param('id') id: string,
        @GetUser('id') userId: number,
    ) {
        return this.dogService.findOneMyDog(
            +id,
            userId,
        );
    }

    @Delete('/my-dogs/:id')
    async removeMyDog(
        @Param('id') id: string,

        @GetUser('id') userId: number,
    ) {
        return await this.dogService.removeMyDog(
            +id,
            userId,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.dogService.findOne(+id);
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDogDto: UpdateDogDto,
    ) {
        return await this.dogService.update(
            +id,
            updateDogDto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.dogService.remove(+id);
    }
}
