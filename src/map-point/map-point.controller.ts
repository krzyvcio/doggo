import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreateMapPointDto } from './dto/create-map-point.dto';
import { UpdateMapPointDto } from './dto/update-map-point.dto';
import { MapPointService } from './map-point.service';

@Controller('map-point')
export class MapPointController {
    constructor(private readonly mapPointService: MapPointService) {}

    @Post()
    create(@Body() createMapPointDto: CreateMapPointDto) {
        return this.mapPointService.create(createMapPointDto);
    }

    @Get()
    findAll() {
        return this.mapPointService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.mapPointService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateMapPointDto: UpdateMapPointDto,
    ) {
        return this.mapPointService.update(+id, updateMapPointDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mapPointService.remove(+id);
    }
}
