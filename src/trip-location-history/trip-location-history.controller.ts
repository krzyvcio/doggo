import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreateTripLocationHistoryDto } from './dto/create-trip-location-history.dto';
import { UpdateTripLocationHistoryDto } from './dto/update-trip-location-history.dto';
import { TripLocationHistoryService } from './trip-location-history.service';

@Controller('trip-location-history')
export class TripLocationHistoryController {
    constructor(
        private readonly tripLocationHistoryService: TripLocationHistoryService,
    ) {}

    @Post()
    create(@Body() createTripLocationHistoryDto: CreateTripLocationHistoryDto) {
        return this.tripLocationHistoryService.create(
            createTripLocationHistoryDto,
        );
    }

    @Get()
    findAll() {
        return this.tripLocationHistoryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.tripLocationHistoryService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateTripLocationHistoryDto: UpdateTripLocationHistoryDto,
    ) {
        return this.tripLocationHistoryService.update(
            +id,
            updateTripLocationHistoryDto,
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.tripLocationHistoryService.remove(+id);
    }
}
