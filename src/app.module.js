"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
// import { ArticleModule } from './article/article.module';
var auth_module_1 = require("./auth/auth.module");
var database_module_1 = require("./database/database.module");
var email_change_module_1 = require("./email-change/email-change.module");
var email_verification_module_1 = require("./email-verification/email-verification.module");
var location_module_1 = require("./location/location.module");
var map_point_module_1 = require("./map-point/map-point.module");
var order_module_1 = require("./order/order.module");
var password_reset_module_1 = require("./password-reset/password-reset.module");
var payment_module_1 = require("./payment/payment.module");
var pet_module_1 = require("./pet/pet.module");
var pet_owner_module_1 = require("./pet-owner/pet-owner.module");
var pet_patron_module_1 = require("./pet-patron/pet-patron.module");
var phone_verification_module_1 = require("./phone-verification/phone-verification.module");
var profile_module_1 = require("./profile/profile.module");
var schedule_module_1 = require("./schedule/schedule.module");
var shared_module_1 = require("./shared/shared.module");
var transaction_module_1 = require("./transaction/transaction.module");
var trip_module_1 = require("./trip/trip.module");
var trip_location_history_module_1 = require("./trip-location-history/trip-location-history.module");
var user_module_1 = require("./user/user.module");
var wallet_module_1 = require("./wallet/wallet.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                shared_module_1.SharedModule,
                user_module_1.UserModule,
                auth_module_1.AuthModule,
                email_change_module_1.EmailChangeModule,
                email_verification_module_1.EmailVerificationModule,
                phone_verification_module_1.PhoneVerificationModule,
                password_reset_module_1.PasswordResetModule,
                profile_module_1.ProfileModule,
                pet_owner_module_1.PetOwnerModule,
                pet_patron_module_1.PetPatronModule,
                schedule_module_1.ScheduleModule,
                pet_module_1.PetModule,
                database_module_1.DatabaseModule,
                wallet_module_1.WalletModule,
                transaction_module_1.TransactionModule,
                payment_module_1.PaymentModule,
                order_module_1.OrderModule,
                trip_module_1.TripModule,
                location_module_1.LocationModule,
                map_point_module_1.MapPointModule,
                trip_location_history_module_1.TripLocationHistoryModule,
                // ArticleModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
