import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offers')
export class OffersController {
    constructor(
        private readonly offersService: OffersService,
    ) {}

    @Post()
    async create(
        @Body() createOfferDto: CreateOfferDto,
    ) {
        return this.offersService.create(
            createOfferDto,
        );
    }

    @Get()
    async findAll() {
        return this.offersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.offersService.findOne(+id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateOfferDto: UpdateOfferDto,
    ) {
        return this.offersService.update(
            +id,
            updateOfferDto,
        );
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.offersService.remove(+id);
    }
}
