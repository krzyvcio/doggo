import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async editUser(
        userId: number,
        dto: EditUserDto,
    ) {
        const user =
            await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    ...dto,
                },
            });

        delete user.password;

        return user;
    }

    async getAllUsers() {
        const users =
            await this.prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                },
            });

        return users;
    }

    async getUserById(userId: number) {
        const user =
            await this.prisma.user.findUnique({
                where: {
                    id: userId,
                },
            });

        return user;
    }

    async getUserByEmail(email: string) {
        const user =
            await this.prisma.user.findUnique({
                where: {
                    email,
                },
            });

        return user;
    }

    async deleteUser(userId: number) {
        const user =
            await this.prisma.user.delete({
                where: {
                    id: userId,
                },
            });

        return user;
    }

    //careful with this one, im adding it for testing purposes
    async deleteAllUsers() {
        const users =
            await this.prisma.user.deleteMany();

        return users;
    }

    // TODO: implement this
    async getUserWithProfile(userId: number) {
        return null;
    }
}
