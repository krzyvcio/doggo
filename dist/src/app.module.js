"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const dog_owner_profile_module_1 = require("./dog-owner-profile/dog-owner-profile.module");
const dog_walker_profile_module_1 = require("./dog-walker-profile/dog-walker-profile.module");
const email_service_1 = require("./email/email.service");
const email_module_1 = require("./email/email.module");
const user_email_confirmation_module_1 = require("./user-email-confirmation/user-email-confirmation.module");
const user_password_reset_module_1 = require("./user-password-reset/user-password-reset.module");
const dog_module_1 = require("./dog/dog.module");
const breed_module_1 = require("./breed/breed.module");
const seed_module_1 = require("./seed/seed.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            dog_owner_profile_module_1.DogOwnerProfileModule,
            dog_walker_profile_module_1.DogWalkerProfileModule,
            email_module_1.EmailModule,
            user_email_confirmation_module_1.UserEmailConfirmationModule,
            user_password_reset_module_1.UserPasswordResetModule,
            dog_module_1.DogModule,
            breed_module_1.BreedModule,
            seed_module_1.SeedModule,
        ],
        providers: [email_service_1.EmailService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map