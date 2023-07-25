import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CustomRepository } from '../../typeorm-ex.decorator';
import { PetPatron } from '../entities/pet-patron.entity';

@CustomRepository(PetPatron)
export class PetPatronRepository extends Repository<PetPatron> {
    async getById(id: number): Promise<PetPatron> {
        const petPatron = await this.findOneBy({ id });
        if (!petPatron) {
            throw new NotFoundException();
        }

        return petPatron;
    }

    async getByUserId(userId: number): Promise<PetPatron> {
        const petPatron = await this.findOneBy({ userId });
        if (!petPatron) {
            throw new NotFoundException();
        }

        return petPatron;
    }
}
