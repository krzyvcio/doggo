import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CustomRepository } from '../../typeorm-ex.decorator';
import { Profile } from '../entities/profile.entity';

@CustomRepository(Profile)
export class ProfileRepository extends Repository<Profile> {
    async getById(id: number): Promise<Profile> {
        const profile = await this.findOneBy({ id });
        if (!profile) {
            throw new NotFoundException();
        }

        return profile;
    }

    async getByPetOwnerId(petOwnerId: number): Promise<Profile> {
        const profile = await this.findOneBy({ petOwnerId });
        if (!profile) {
            throw new NotFoundException();
        }

        return profile;
    }

    async getByPetPatronId(petPatronId: number): Promise<Profile> {
        const profile = await this.findOneBy({ petPatronId });
        if (!profile) {
            throw new NotFoundException();
        }
        return profile;
    }
}
