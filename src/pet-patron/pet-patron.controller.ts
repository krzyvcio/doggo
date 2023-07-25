import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { ReqContext } from '../shared/request-context/req-context.decorator';
import { RequestContext } from '../shared/request-context/request-context.dto';
import { CreatePetPatronDto } from './dto/create-pet-patron.dto';
import { UpdatePetPatronDto } from './dto/update-pet-patron.dto';
import { PetPatronService } from './pet-patron.service';

@Controller('pet-patron')
export class PetPatronController {
    constructor(private readonly petPatronService: PetPatronService) {}

    @Post()
    create(
        @ReqContext() ctx: RequestContext,
        @Body() createPetPatronDto: CreatePetPatronDto,
    ) {
        return this.petPatronService.createPetPatronProfile(
            ctx,
            createPetPatronDto,
        );
    }

    @Get()
    findAll() {
        return this.petPatronService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.petPatronService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updatePetPatronDto: UpdatePetPatronDto,
    ) {
        return this.petPatronService.update(id, updatePetPatronDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.petPatronService.remove(id);
    }
}
