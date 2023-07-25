import { Injectable } from '@nestjs/common';

import { CreatePetPatronDto } from './dto/create-pet-patron.dto';
import { UpdatePetPatronDto } from './dto/update-pet-patron.dto';

@Injectable()
export class PetPatronService {
    create(createPetPatronDto: CreatePetPatronDto) {
        return 'This action adds a new petPatron';
    }

    findAll() {
        return `This action returns all petPatron`;
    }

    findOne(id: number) {
        return `This action returns a #${id} petPatron`;
    }

    update(id: number, updatePetPatronDto: UpdatePetPatronDto) {
        return `This action updates a #${id} petPatron`;
    }

    remove(id: number) {
        return `This action removes a #${id} petPatron`;
    }
}
