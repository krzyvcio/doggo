import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { ArticleModule } from './article/article.module';
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from "./shared/shared.module";
import { UserModule } from "./user/user.module";
import { EmailChangeModule } from "./email-change/email-change.module";
import { EmailVerificationModule } from "./email-verification/email-verification.module";
import { PhoneVerificationModule } from "./phone-verification/phone-verification.module";
import { PasswordResetModule } from "./password-reset/password-reset.module";
import { ProfileModule } from "./profile/profile.module";
import { PetOwnerModule } from "./pet-owner/pet-owner.module";
import { PetWalkerModule } from "./pet-walker/pet-walker.module";
import { ScheduleModule } from "./schedule/schedule.module";
import { PetModule } from "./pet/pet.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    SharedModule,
    UserModule,
    AuthModule,
    EmailChangeModule,
    EmailVerificationModule,
    PhoneVerificationModule,
    PasswordResetModule,
    ProfileModule,
    PetOwnerModule,
    PetWalkerModule,
    ScheduleModule,
    PetModule,
    DatabaseModule
    // ArticleModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
