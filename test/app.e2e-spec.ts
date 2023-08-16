import {
    INestApplication,
    ValidationPipe,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { LoginDto } from '../src/auth/dto';

import { PrismaService } from '../src/prisma/prisma.service';
import { EditUserDto } from '../src/user/dto';

describe('App e2e', () => {
    let app: INestApplication;
    let prisma: PrismaService;

    beforeAll(async () => {
        const moduleRef =
            await Test.createTestingModule({
                imports: [AppModule],
            }).compile();

        app = moduleRef.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
            }),
        );
        await app.init();
        await app.listen(3333);

        prisma = app.get(PrismaService);
        await prisma.cleanDb();
        pactum.request.setBaseUrl(
            'http://localhost:3333',
        );
    });

    afterAll(() => {
        app.close();
    });

    describe('Auth', () => {
        const dto: LoginDto = {
            email: 'vlad@gmail.com',
            password: '123',
        };
        describe('register', () => {
            it('should throw if email empty', () => {
                return pactum
                    .spec()
                    .post('/auth/register')
                    .withBody({
                        password: dto.password,
                    })
                    .expectStatus(400);
            });
            it('should throw if password empty', () => {
                return pactum
                    .spec()
                    .post('/auth/register')
                    .withBody({
                        email: dto.email,
                    })
                    .expectStatus(400);
            });
            it('should throw if no body provided', () => {
                return pactum
                    .spec()
                    .post('/auth/register')
                    .expectStatus(400);
            });
            it('should register', () => {
                return pactum
                    .spec()
                    .post('/auth/register')
                    .withBody(dto)
                    .expectStatus(201);
            });
        });

        describe('Signin', () => {
            it('should throw if email empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody({
                        password: dto.password,
                    })
                    .expectStatus(400);
            });
            it('should throw if password empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody({
                        email: dto.email,
                    })
                    .expectStatus(400);
            });
            it('should throw if no body provided', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .expectStatus(400);
            });
            it('should signin', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody(dto)
                    .expectStatus(200)
                    .stores(
                        'userAt',
                        'accessToken',
                    );
            });
        });
    });

    describe('User', () => {
        describe('Get me', () => {
            it('should get current user', () => {
                return pactum
                    .spec()
                    .get('/users/me')
                    .withHeaders({
                        Authorization:
                            'Bearer $S{userAt}',
                    })
                    .expectStatus(200);
            });
        });

        describe('Edit user', () => {
            it('should edit user', () => {
                const dto: EditUserDto = {
                    firstName: 'Michał',
                    lastName: 'Rusin',
                };
                return pactum
                    .spec()
                    .patch('/users')
                    .withHeaders({
                        Authorization:
                            'Bearer $S{userAt}',
                    })
                    .withBody(dto)
                    .expectStatus(200)
                    .expectBodyContains(
                        dto.firstName,
                    )
                    .expectBodyContains(
                        dto.firstName,
                    );
            });
        });
    });
});
