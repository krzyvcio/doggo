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
import { DogWalkerProfileService } from './dog-walker-profile.service';
import { CreateDogWalkerProfileDto } from './dto/create-dog-walker-profile.dto';
import { UpdateDogWalkerProfileDto } from './dto/update-dog-walker-profile.dto';
import { JwtGuard } from '../auth/guard';
import { RolesGuard } from '../auth/guard/roles.guard';
import { Roles } from '../auth/decorator';
import { UserRole } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('dog-walker-profile')
@Controller('dog-walker-profile')
export class DogWalkerProfileController {
    constructor(
        private readonly dogWalkerProfileService: DogWalkerProfileService,
    ) {}

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.DogWalker, UserRole.Admin)
    @Post()
    create(
        @Body()
        createDogWalkerProfileDto: CreateDogWalkerProfileDto,
    ) {
        return this.dogWalkerProfileService.create(
            createDogWalkerProfileDto,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Get()
    findAll() {
        return this.dogWalkerProfileService.findAll();
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.dogWalkerProfileService.findOne(
            +id,
        );
    }

    @UseGuards(JwtGuard, RolesGuard)
    @Roles(UserRole.Admin)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body()
        updateDogWalkerProfileDto: UpdateDogWalkerProfileDto,
    ) {
        return this.dogWalkerProfileService.update(
            +id,
            updateDogWalkerProfileDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.dogWalkerProfileService.remove(
            +id,
        );
    }
}
