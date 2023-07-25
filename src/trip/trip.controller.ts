import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";

import {CreateTripDto} from "./dto/create-trip.dto";
import {UpdateTripDto} from "./dto/update-trip.dto";
import {TripService} from "./trip.service";

@Controller("trip")
export class TripController {
    constructor(private readonly tripService: TripService) {
    }

    @Post()
    create(@Body() createTripDto: CreateTripDto) {
        return this.tripService.create(createTripDto);
    }

    @Get()
    findAll() {
        return this.tripService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.tripService.findOne(+id);
    }

    @Patch(":id")
    update(@Param("id") id: string, @Body() updateTripDto: UpdateTripDto) {
        return this.tripService.update(+id, updateTripDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.tripService.remove(+id);
    }
}
