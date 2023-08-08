import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { BreedService } from './breed.service';
import { CreateBreedDto } from './dto/create-breed.dto';
import { UpdateBreedDto } from './dto/update-breed.dto';
import { JwtGuard } from '../auth/guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator/roles.decorator';
import { UserRole } from '@prisma/client';

@Controller('breed')
export class BreedController {
    constructor(
        private readonly breedService: BreedService,
    ) {}

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Post()
    async create(
        @Body() createBreedDto: CreateBreedDto,
    ) {
        return await this.breedService.create(
            createBreedDto,
        );
    }

    @Get()
    async findAll() {
        return await this.breedService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.breedService.findOne(
            +id,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateBreedDto: UpdateBreedDto,
    ) {
        return await this.breedService.update(
            +id,
            updateBreedDto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.breedService.remove(
            +id,
        );
    }
}
