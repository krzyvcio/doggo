import {NotFoundException} from "@nestjs/common";
import {Test, TestingModule} from "@nestjs/testing";

import {ROLE} from "../../auth/constants/role.constant";
import {UserRepository} from "./user.repository";

describe("UserRepository", () => {
    let repository: UserRepository;

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            providers: [UserRepository]
        }).compile();

        repository = moduleRef.get<UserRepository>(UserRepository);
    });

    it("should be defined", () => {
        expect(repository).toBeDefined();
    });

    describe("Get user by id", () => {
        const currentDate = new Date();
        it("should call findOne with correct id", () => {
            const id = 1;

            const expectedOutput: {
                createdAt: Date;
                password: string;
                roles: ROLE.USER[];
                name: string;
                isAccountDisabled: boolean;
                id: number;
                articles: any[];
                email: string;
                username: string;
                updatedAt: Date;
            } = {
                id,
                name: "Default User",
                username: "default-user",
                password: "random-password",
                roles: [ROLE.USER],
                isAccountDisabled: false,
                email: "default-user@random.com",
                createdAt: currentDate,
                updatedAt: currentDate,
                articles: []
            };

            // @ts-ignore
            jest.spyOn(repository, "findOne").mockResolvedValue(expectedOutput);
            repository.getById(id);
            expect(repository.findOne).toHaveBeenCalledWith(id);
        });

        it("should return user if found", async () => {
            const expectedOutput: {
                createdAt: Date;
                password: string;
                roles: ROLE.USER[];
                name: string;
                isAccountDisabled: boolean;
                id: number;
                articles: any[];
                email: string;
                username: string;
                updatedAt: Date;
            } = {
                id: 1,
                name: "Default User",
                username: "default-user",
                password: "random-password",
                roles: [ROLE.USER],
                isAccountDisabled: false,
                email: "default-user@random.com",
                createdAt: currentDate,
                updatedAt: currentDate,
                articles: []
            };

            // @ts-ignore
            jest.spyOn(repository, "findOne").mockResolvedValue(expectedOutput);

            expect(await repository.getById(1)).toEqual(expectedOutput);
        });

        it("should throw NotFoundError when user not found", async () => {
            jest.spyOn(repository, "findOne").mockResolvedValue(undefined);
            try {
                await repository.getById(1);
            } catch (error) {
                expect(error.constructor).toBe(NotFoundException);
            }
        });
    });
});
