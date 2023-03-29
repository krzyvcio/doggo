import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { ArticleModule } from './article/article.module';
import { AuthModule } from "./auth/auth.module";
import { EmailChangeModule } from "./email-change/email-change.module";
import { EmailVerificationModule } from "./email-verification/email-verification.module";
import { LocationModule } from "./location/location.module";
import { MapPointModule } from "./map-point/map-point.module";
import { OrderModule } from "./order/order.module";
import { PasswordResetModule } from "./password-reset/password-reset.module";
import { PaymentModule } from "./payment/payment.module";
import { PetModule } from "./pet/pet.module";
import { PetOwnerModule } from "./pet-owner/pet-owner.module";
import { PetPatronModule } from "./pet-patron/pet-patron.module";
import { PhoneVerificationModule } from "./phone-verification/phone-verification.module";
import { ProfileModule } from "./profile/profile.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { SharedModule } from "./shared/shared.module";
import { TransactionModule } from "./transaction/transaction.module";
import { TripModule } from "./trip/trip.module";
import { TripLocationHistoryModule } from "./trip-location-history/trip-location-history.module";
import { UserModule } from "./user/user.module";
import { WalletModule } from "./wallet/wallet.module";

@Module({
  imports: [
    SharedModule,
    // DatabaseModule,
    UserModule,
    AuthModule,
    EmailChangeModule,
    EmailVerificationModule,
    PhoneVerificationModule,
    PasswordResetModule,
    ProfileModule,
    PetOwnerModule,
    PetPatronModule,
    ScheduleModule,
    PetModule,
    WalletModule,
    TransactionModule,
    PaymentModule,
    OrderModule,
    TripModule,
    LocationModule,
    MapPointModule,
    TripLocationHistoryModule
    // ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
