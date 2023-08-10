import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get(
                        'DATABASE_URL',
                    ),
                },
            },
        });
    }

    cleanDb() {
        return this.$transaction([
            this.user.deleteMany(),
            this.userEmailConfirmation.deleteMany(),
            this.userPasswordReset.deleteMany(),
            this.dogOwnerProfile.deleteMany(),
            this.dogWalkerProfile.deleteMany(),
            this.dog.deleteMany(),
            this.wallet.deleteMany(),
            this.payment.deleteMany(),
            this.review.deleteMany(),
        ]);
    }
}
