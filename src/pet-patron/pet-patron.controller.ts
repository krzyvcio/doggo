import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreatePetPatronDto } from './dto/create-pet-patron.dto';
import { UpdatePetPatronDto } from './dto/update-pet-patron.dto';
import { PetPatronService } from './pet-patron.service';

@Controller('pet-patron')
export class PetPatronController {
    constructor(private readonly petPatronService: PetPatronService) {}

    @Post()
    create(@Body() createPetPatronDto: CreatePetPatronDto) {
        return this.petPatronService.create(createPetPatronDto);
    }

    @Get()
    findAll() {
        return this.petPatronService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.petPatronService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updatePetPatronDto: UpdatePetPatronDto,
    ) {
        return this.petPatronService.update(+id, updatePetPatronDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petPatronService.remove(+id);
    }
}
