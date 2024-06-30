import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OffersService {
    constructor(private prisma: PrismaService) {}

    async create(createOfferDto: CreateOfferDto) {
        try {
            const {
                firstName,
                lastName,
                dogName,
                phone,
                email,
                date,
                priceFor15Minutes,
                priceFor30Minutes,
                priceFor60Minutes,
                offerType,
            } = createOfferDto;

            console.log(
                'createOfferDto',
                createOfferDto,
            );

            const offer =
                await this.prisma.offer.create({
                    data: {
                        firstName,
                        lastName,
                        dogName,
                        email,
                        phone,
                        date: new Date(date),
                        priceFor15Minutes:
                            +priceFor15Minutes ||
                            null,
                        priceFor30Minutes:
                            +priceFor30Minutes ||
                            null,
                        priceFor60Minutes:
                            +priceFor60Minutes ||
                            null,
                        offerType,
                        isAnonymous: true,
                    },
                });

            return offer;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findAll() {
        const offers =
            await this.prisma.offer.findMany({
                include: {
                    Walker: {
                        select: {
                            id: true,
                            email: true,
                            phone: true,
                            roles: false,
                            firstName: true,
                            lastName: true,
                            image: true,
                            createdAt: false,
                            updatedAt: false,
                            isEmailConfirmed:
                                false,
                            isUserDeleted: false,
                        },
                    },
                    Owner: {
                        select: {
                            id: true,
                            email: true,
                            phone: true,
                            roles: false,
                            firstName: true,
                            lastName: true,
                            image: true,
                            createdAt: false,
                            updatedAt: false,
                            isEmailConfirmed:
                                false,
                            isUserDeleted: false,
                        },
                    },
                    Dog: true,
                },
            });
        return offers;
    }

    async findOne(id: number) {
        const offer =
            await this.prisma.offer.findUnique({
                where: { id },
            });
        return offer;
    }

    async update(
        id: number,
        updateOfferDto: CreateOfferDto,
    ) {
        const {
            firstName,
            lastName,
            email,
            phone,
            dogName,
            date,
            priceFor15Minutes,
            priceFor30Minutes,
            priceFor60Minutes,
            offerType,
        } = updateOfferDto;

        const updatedOffer =
            await this.prisma.offer.update({
                where: { id },
                data: {
                    firstName,
                    lastName,
                    email,
                    phone,
                    dogName,
                    date,
                    priceFor15Minutes,
                    priceFor30Minutes,
                    priceFor60Minutes,
                    offerType,
                },
            });

        return updatedOffer;
    }

    async remove(id: number) {
        const deletedOffer =
            await this.prisma.offer.delete({
                where: { id },
            });
        return deletedOffer;
    }
}
