import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PetService } from './pet.service';

@Controller('pet')
export class PetController {
    constructor(private readonly petService: PetService) {}

    @Post()
    create(@Body() createPetDto: CreatePetDto) {
        return this.petService.create(createPetDto);
    }

    @Get()
    findAll() {
        return this.petService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.petService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
        return this.petService.update(+id, updatePetDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.petService.remove(+id);
    }
}
