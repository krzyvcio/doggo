import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { PetOwnerOutput } from '../pet-owner/dto/pet-owner-output.dto';
import { PetOwnerService } from '../pet-owner/pet-owner.service';
import { PetOwnerRepository } from '../pet-owner/repositories/pet-owner.repository';
import { PetPatronOutput } from '../pet-patron/dto/pet-patron-output.dto';
import { PetPatronService } from '../pet-patron/pet-patron.service';
import { PetPatronRepository } from '../pet-patron/repositories/pet-patron.repository';
import { AppLogger } from '../shared/logger/logger.service';
import { RequestContext } from '../shared/request-context/request-context.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ProfileOutput } from './dto/profile-output.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { ProfileRepository } from './repositories/profile.repository';

@Injectable()
export class ProfileService {
    constructor(
        private repository: ProfileRepository,
        private petOwnerService: PetOwnerService,
        private petPatronService: PetPatronService,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(ProfileService.name);
    }

    async createProfile(
        ctx: RequestContext,
        input: CreateProfileDto,
    ): Promise<ProfileOutput> {
        this.logger.log(ctx, `${this.createProfile.name} was called`);

        const profile = plainToClass(Profile, input);

        this.logger.log(ctx, `calling ${ProfileRepository.name}.saveProfile`);
        const newProfile = await this.repository.save(profile);

        let petOwnerProfile: PetOwnerOutput | null = null;
        if (input.iAmPetOwner === true) {
            const petOwner = plainToClass(PetOwnerRepository, input);
            this.logger.log(
                ctx,
                `calling ${PetOwnerRepository.name}.savePetOwner`,
            );

            const createPetOwnerDto = new CreateProfileDto();
            createPetOwnerDto.userId = input.userId;
            createPetOwnerDto.profileId = newProfile.id;

            petOwnerProfile = await this.petOwnerService.createPetOwnerProfile(
                ctx,
                createPetOwnerDto,
            );
        }

        let petPatronProfile: PetPatronOutput | null = null;
        if (input.iAmPetPatron === true) {
            const petPatron = plainToClass(PetPatronRepository, input);
            this.logger.log(
                ctx,
                `calling ${PetPatronRepository.name}.savePetPatron`,
            );

            const createPetPatronDto = new CreateProfileDto();
            createPetPatronDto.userId = input.userId;
            createPetPatronDto.profileId = newProfile.id;

            petPatronProfile =
                await this.petPatronService.createPetPatronProfile(
                    ctx,
                    createPetPatronDto,
                );
        }
        if (petOwnerProfile) newProfile.petOwnerId = petOwnerProfile.id;
        if (petPatronProfile) newProfile.petPatronId = petPatronProfile.id;
        await this.repository.update(newProfile.id, {
            petOwnerId: newProfile.petOwnerId,
            petPatronId: newProfile.petPatronId,
        });

        return plainToClass(ProfileOutput, profile, {
            excludeExtraneousValues: true,
        });
    }

    async findAll() {
        return await this.repository.find({ relations: ['user'] });
    }

    async findOne(id: number) {
        return await this.repository.findOneBy({ id });
    }

    async update(id: number, updateProfileDto: UpdateProfileDto) {
        return await this.repository.update(id, updateProfileDto);
    }

    async remove(id: number) {
        return await this.repository.delete(id);
    }
}
