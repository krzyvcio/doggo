import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CustomRepository } from '../../typeorm-ex.decorator';
import { User } from '../entities/user.entity';

@CustomRepository(User)
export class UserRepository extends Repository<User> {
    async getById(id: number): Promise<User> {
        const user = await this.findOneBy({ id });
        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async getByUsername(username: string): Promise<User> {
        const user = await this.findOneBy({ username });
        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async getByEmail(email: string): Promise<User> {
        const user = await this.findOneBy({ email });
        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async getByIdAndUpdate(id: number, data: Partial<User>): Promise<User> {
        return this.save({ id, ...data });
    }
}
