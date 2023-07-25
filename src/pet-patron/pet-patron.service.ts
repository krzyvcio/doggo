import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { AppLogger } from '../shared/logger/logger.service';
import { RequestContext } from '../shared/request-context/request-context.dto';
import { CreatePetPatronDto } from './dto/create-pet-patron.dto';
import { PetPatronOutput } from './dto/pet-patron-output.dto';
import { UpdatePetPatronDto } from './dto/update-pet-patron.dto';
import { PetPatron } from './entities/pet-patron.entity';
import { PetPatronRepository } from './repositories/pet-patron.repository';

@Injectable()
export class PetPatronService {
    constructor(
        private repository: PetPatronRepository,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(PetPatronService.name);
    }

    async createPetPatronProfile(
        ctx: RequestContext,
        input: CreatePetPatronDto,
    ) {
        this.logger.log(ctx, `${this.createPetPatronProfile.name} was called`);

        const petPatron = plainToClass(PetPatron, input);

        this.logger.log(
            ctx,
            `calling ${PetPatronRepository.name}.savePetPatronProfile`,
        );
        await this.repository.save(petPatron);

        return plainToClass(PetPatronOutput, petPatron, {
            excludeExtraneousValues: true,
        });
    }

    async findAll() {
        return await this.repository.find({ relations: ['user', 'profile'] });
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async update(id: number, updatePetPatronDto: UpdatePetPatronDto) {
        return await this.repository.update(id, updatePetPatronDto);
    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }
}
