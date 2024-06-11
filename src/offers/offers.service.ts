import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OffersService {
    constructor(private prisma: PrismaService) {}

    async create(createOfferDto: CreateOfferDto) {
        const {
            walkerId,
            ownerId,
            dogId,
            date,
            status,
        } = createOfferDto;

        const offer =
            await this.prisma.offer.create({
                data: {
                    Walker: walkerId
                        ? {
                              connect: {
                                  id: walkerId,
                              },
                          }
                        : undefined,
                    Owner: ownerId
                        ? {
                              connect: {
                                  id: ownerId,
                              },
                          }
                        : undefined,
                    Dog: dogId
                        ? {
                              connect: {
                                  id: dogId,
                              },
                          }
                        : undefined,
                    date,
                    status,
                },
            });

        return offer;
    }

    async findAll() {
        const offers =
            await this.prisma.offer.findMany();
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
        updateOfferDto: UpdateOfferDto,
    ) {
        const {
            walkerId,
            ownerId,
            dogId,
            date,
            status,
        } = updateOfferDto;

        const updatedOffer =
            await this.prisma.offer.update({
                where: { id },
                data: {
                    Walker: walkerId
                        ? {
                              connect: {
                                  id: walkerId,
                              },
                          }
                        : undefined,
                    Owner: ownerId
                        ? {
                              connect: {
                                  id: ownerId,
                              },
                          }
                        : undefined,
                    Dog: dogId
                        ? {
                              connect: {
                                  id: dogId,
                              },
                          }
                        : undefined,
                    date,
                    status,
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
