import { Injectable } from '@nestjs/common';

import { CreateTripLocationHistoryDto } from './dto/create-trip-location-history.dto';
import { UpdateTripLocationHistoryDto } from './dto/update-trip-location-history.dto';

@Injectable()
export class TripLocationHistoryService {
    create(createTripLocationHistoryDto: CreateTripLocationHistoryDto) {
        return 'This action adds a new tripLocationHistory';
    }

    findAll() {
        return `This action returns all tripLocationHistory`;
    }

    findOne(id: number) {
        return `This action returns a #${id} tripLocationHistory`;
    }

    update(
        id: number,
        updateTripLocationHistoryDto: UpdateTripLocationHistoryDto,
    ) {
        return `This action updates a #${id} tripLocationHistory`;
    }

    remove(id: number) {
        return `This action removes a #${id} tripLocationHistory`;
    }
}
