import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { PetPatronRepository } from '../pet-patron/repositories/pet-patron.repository';
import { AppLogger } from '../shared/logger/logger.service';
import { RequestContext } from '../shared/request-context/request-context.dto';
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { PetOwnerOutput } from './dto/pet-owner-output.dto';
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { PetOwner } from './entities/pet-owner.entity';
import { PetOwnerRepository } from './repositories/pet-owner.repository';

@Injectable()
export class PetOwnerService {
    constructor(
        private repository: PetOwnerRepository,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(PetOwnerService.name);
    }

    async createPetOwnerProfile(ctx: RequestContext, input: CreatePetOwnerDto) {
        this.logger.log(ctx, `${this.createPetOwnerProfile.name} was called`);

        const petOwner = plainToClass(PetOwner, input);

        this.logger.log(
            ctx,
            `calling ${PetOwnerRepository.name}.savePetOwnerProfile`,
        );
        await this.repository.save(petOwner);

        return plainToClass(PetOwnerOutput, petOwner, {
            excludeExtraneousValues: true,
        });
    }

    async findAll() {
        return await this.repository.find({ relations: ['user', 'profile'] });
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async update(id: number, updatePetOwnerDto: UpdatePetOwnerDto) {
        return await this.repository.update(id, updatePetOwnerDto);
    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }
}
