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
import { DogWalkerAvailabilityService } from './dog-walker-availability.service';
import { CreateDogWalkerAvailabilityDto } from './dto/create-dog-walker-availability.dto';
import { UpdateDogWalkerAvailabilityDto } from './dto/update-dog-walker-availability.dto';
import { JwtGuard } from '../auth/guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import {
    GetUser,
    Roles,
} from '../auth/decorator';
import { UserRole } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dog-walker-availability')
@Controller('dog-walker-availability')
export class DogWalkerAvailabilityController {
    constructor(
        private readonly dogWalkerAvailabilityService: DogWalkerAvailabilityService,
    ) {}

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin, UserRole.DogWalker)
    @Get('/my-availability')
    async getMyAvailability(
        @GetUser('id') userId: number,
    ) {
        return await this.dogWalkerAvailabilityService.getMyAvailability(
            userId,
        );
    }

    @Get('/id/:id')
    async getDogWalkerAvailability(
        userId: number,
    ) {
        return await this.dogWalkerAvailabilityService.getDogWalkerAvailabilityByDogWalkerProfileId(
            userId,
        );
    }

    @Post()
    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    async create(
        @Body()
        createDogWalkerAvailabilityDto: CreateDogWalkerAvailabilityDto,
    ) {
        return await this.dogWalkerAvailabilityService.create(
            createDogWalkerAvailabilityDto,
        );
    }

    @Get()
    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    async findAll() {
        return await this.dogWalkerAvailabilityService.findAll();
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.dogWalkerAvailabilityService.findOne(
            +id,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body()
        updateDogWalkerAvailabilityDto: UpdateDogWalkerAvailabilityDto,
    ) {
        return await this.dogWalkerAvailabilityService.update(
            +id,
            updateDogWalkerAvailabilityDto,
        );
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.dogWalkerAvailabilityService.remove(
            +id,
        );
    }
}
