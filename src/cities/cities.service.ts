import { Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
    async create(createCityDto: CreateCityDto) {
        return 'This action adds a new city';
    }

    async findAll() {
        return `This action returns all cities`;
    }

    async findOne(id: number) {
        return `This action returns a #${id} city`;
    }

    async update(
        id: number,
        updateCityDto: UpdateCityDto,
    ) {
        return `This action updates a #${id} city`;
    }

    async remove(id: number) {
        return `This action removes a #${id} city`;
    }
}
