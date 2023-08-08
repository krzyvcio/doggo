import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { DogOwnerProfileService } from './dog-owner-profile.service';
import { CreateDogOwnerProfileDto } from './dto/create-dog-owner-profile.dto';
import { UpdateDogOwnerProfileDto } from './dto/update-dog-owner-profile.dto';

@Controller('dog-owner-profile')
export class DogOwnerProfileController {
    constructor(
        private readonly dogOwnerProfileService: DogOwnerProfileService,
    ) {}

    @Post()
    async create(
        @Body()
        createDogOwnerProfileDto: CreateDogOwnerProfileDto,
    ) {
        return await this.dogOwnerProfileService.create(
            createDogOwnerProfileDto,
        );
    }

    @Get()
    async findAll() {
        return await this.dogOwnerProfileService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.dogOwnerProfileService.findOne(
            +id,
        );
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body()
        updateDogOwnerProfileDto: UpdateDogOwnerProfileDto,
    ) {
        return await this.dogOwnerProfileService.update(
            +id,
            updateDogOwnerProfileDto,
        );
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.dogOwnerProfileService.remove(
            +id,
        );
    }
}
