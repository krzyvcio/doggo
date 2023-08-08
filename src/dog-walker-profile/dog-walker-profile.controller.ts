import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { DogWalkerProfileService } from './dog-walker-profile.service';
import { CreateDogWalkerProfileDto } from './dto/create-dog-walker-profile.dto';
import { UpdateDogWalkerProfileDto } from './dto/update-dog-walker-profile.dto';

@Controller('dog-walker-profile')
export class DogWalkerProfileController {
    constructor(
        private readonly dogWalkerProfileService: DogWalkerProfileService,
    ) {}

    @Post()
    create(
        @Body()
        createDogWalkerProfileDto: CreateDogWalkerProfileDto,
    ) {
        return this.dogWalkerProfileService.create(
            createDogWalkerProfileDto,
        );
    }

    @Get()
    findAll() {
        return this.dogWalkerProfileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.dogWalkerProfileService.findOne(
            +id,
        );
    }

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
