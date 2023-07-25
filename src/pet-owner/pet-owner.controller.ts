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
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { PetOwnerService } from './pet-owner.service';

@Controller('pet-owner')
export class PetOwnerController {
    constructor(private readonly petOwnerService: PetOwnerService) {}

    @Post()
    create(
        @ReqContext() ctx: RequestContext,
        @Body() createPetOwnerDto: CreatePetOwnerDto,
    ) {
        return this.petOwnerService.createPetOwnerProfile(
            ctx,
            createPetOwnerDto,
        );
    }

    @Get()
    findAll() {
        return this.petOwnerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.petOwnerService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updatePetOwnerDto: UpdatePetOwnerDto,
    ) {
        return this.petOwnerService.update(id, updatePetOwnerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.petOwnerService.remove(id);
    }
}
