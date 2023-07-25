import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CustomRepository } from '../../typeorm-ex.decorator';
import { PetOwner } from '../entities/pet-owner.entity';

@CustomRepository(PetOwner)
export class PetOwnerRepository extends Repository<PetOwner> {
    async getById(id: number): Promise<PetOwner> {
        const petOwner = await this.findOneBy({ id });
        if (!petOwner) {
            throw new NotFoundException();
        }

        return petOwner;
    }

    async getByProfileId(profileId: number): Promise<PetOwner> {
        const petOwner = await this.findOneBy({ profileId });
        if (!petOwner) {
            throw new NotFoundException();
        }

        return petOwner;
    }

    async getByUserId(userId: number): Promise<PetOwner> {
        const petOwner = await this.findOneBy({ userId });
        if (!petOwner) {
            throw new NotFoundException();
        }

        return petOwner;
    }
}
