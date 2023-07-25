import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { plainToClass } from 'class-transformer';

import { PetOwnerOutput } from '../../pet-owner/dto/pet-owner-output.dto';
import { PetOwnerService } from '../../pet-owner/pet-owner.service';
import { PetOwnerRepository } from '../../pet-owner/repositories/pet-owner.repository';
import { PetPatronOutput } from '../../pet-patron/dto/pet-patron-output.dto';
import { PetPatronService } from '../../pet-patron/pet-patron.service';
import { CreateProfileDto } from '../../profile/dto/create-profile.dto';
import { UpdateProfileDto } from '../../profile/dto/update-profile.dto';
import { ProfileService } from '../../profile/profile.service';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateUserInput } from '../dtos/user-update-input.dto';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
    constructor(
        private repository: UserRepository,
        private profileService: ProfileService,
        private petOwnerService: PetOwnerService,
        private petPatronService: PetPatronService,
        private readonly logger: AppLogger,
    ) {
        this.logger.setContext(UserService.name);
    }

    async createUser(
        ctx: RequestContext,
        input: CreateUserInput,
    ): Promise<UserOutput> {
        try {
            this.logger.log(ctx, `${this.createUser.name} was called`);

            const user = plainToClass(User, input);

            user.passwordHash = await hash(input.password, 10);

            this.logger.log(ctx, `calling ${UserRepository.name}.saveUser`);
            const newUser = await this.repository.save(user);

            this.logger.log(
                ctx,
                `calling ${ProfileService.name}.createProfile`,
            );

            // Create the profile dto.
            const profileDto = new CreateProfileDto();
            profileDto.userId = newUser.id;
            profileDto.bio = null;
            profileDto.iAmPetOwner = input.iAmPetOwner;
            profileDto.iAmPetPatron = input.iAmPetPatron;

            // Create the profile.
            const userProfile = await this.profileService.createProfile(
                ctx,
                profileDto,
            );

            // Update the user with the profileId.
            const updatedUser = await this.repository.getByIdAndUpdate(
                newUser.id,
                {
                    profileId: userProfile.id,
                },
            );

            return plainToClass(UserOutput, user, {
                excludeExtraneousValues: true,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async validateUsernamePassword(
        ctx: RequestContext,
        username: string,
        pass: string,
    ): Promise<UserOutput> {
        this.logger.log(
            ctx,
            `${this.validateUsernamePassword.name} was called`,
        );

        this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { username } });
        if (!user) throw new UnauthorizedException();

        const match = await compare(pass, user.passwordHash);
        if (!match) throw new UnauthorizedException();

        return plainToClass(UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }

    async getUsers(
        ctx: RequestContext,
        limit: number,
        offset: number,
    ): Promise<{ users: UserOutput[]; count: number }> {
        this.logger.log(ctx, `${this.getUsers.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.findAndCount`);
        const [users, count] = await this.repository.findAndCount({
            where: {},
            take: limit,
            skip: offset,
        });

        const usersOutput = plainToClass(UserOutput, users, {
            excludeExtraneousValues: true,
        });

        return { users: usersOutput, count };
    }

    async findById(ctx: RequestContext, id: number): Promise<UserOutput> {
        this.logger.log(ctx, `${this.findById.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
        const user = await this.repository.findOneBy({ id });

        return plainToClass(UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }

    async getUserById(ctx: RequestContext, id: number): Promise<UserOutput> {
        this.logger.log(ctx, `${this.getUserById.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
        const user = await this.repository.getById(id);

        return plainToClass(UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }

    async findByUsername(
        ctx: RequestContext,
        username: string,
    ): Promise<UserOutput> {
        this.logger.log(ctx, `${this.findByUsername.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.findOne`);
        const user = await this.repository.findOne({ where: { username } });

        return plainToClass(UserOutput, user, {
            excludeExtraneousValues: true,
        });
    }

    async updateUser(
        ctx: RequestContext,
        userId: number,
        input: UpdateUserInput,
    ): Promise<UserOutput> {
        this.logger.log(ctx, `${this.updateUser.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
        const user = await this.repository.getById(userId);

        // Hash the password if it exists in the input payload.
        if (input.password) {
            input.password = await hash(input.password, 10);
        }

        // merges the input (2nd line) to the found user (1st line)
        const updatedUser: User = {
            ...user,
            ...plainToClass(User, input),
        };

        this.logger.log(ctx, `calling ${UserRepository.name}.save`);
        await this.repository.save(updatedUser);

        return plainToClass(UserOutput, updatedUser, {
            excludeExtraneousValues: true,
        });
    }

    async deleteUser(ctx: RequestContext, userId: number): Promise<boolean> {
        this.logger.log(ctx, `${this.deleteUser.name} was called`);

        this.logger.log(ctx, `calling ${UserRepository.name}.getById`);
        const user = await this.repository.getById(userId);

        if (!user) return false;
        this.logger.log(ctx, `calling ${UserRepository.name}.delete`);
        await this.repository.delete(user.id);

        return true;
    }
}
