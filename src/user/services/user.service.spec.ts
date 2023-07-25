import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let repo: Repository<User>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: getRepositoryToken(User),
                    useClass: Repository,
                },
            ],
        }).compile();

        service = module.get<UserService>(UserService);
        repo = module.get<Repository<User>>(getRepositoryToken(User));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('createUser', () => {
        it('should successfully insert a user', async () => {
            const createSpy = jest.spyOn(repo, 'save');
            const user = await service.createUser(
                {} as any,
                {
                    username: 'john',
                    password: '1234',
                } as any,
            );

            expect(createSpy).toHaveBeenCalled();
            expect(user.username).toEqual('john');
        });
    });

    describe('findByUsername', () => {
        it('should call repository methods', async () => {
            const getSpy = jest.spyOn(repo, 'findOne');

            await service.findByUsername({} as any, 'admin');

            expect(getSpy).toHaveBeenCalled();
        });
    });

    describe('updateUser', () => {
        it('should call repository methods', async () => {
            const getSpy = jest.spyOn(repo, 'findOne');
            const saveSpy = jest.spyOn(repo, 'save');

            await service.updateUser({} as any, 1, {
                username: 'admin',
            } as any);

            expect(getSpy).toHaveBeenCalledWith(1);
            expect(saveSpy).toHaveBeenCalled();
        });
    });
});
