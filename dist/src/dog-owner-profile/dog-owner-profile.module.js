"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogOwnerProfileModule = void 0;
const common_1 = require("@nestjs/common");
const dog_owner_profile_service_1 = require("./dog-owner-profile.service");
const dog_owner_profile_controller_1 = require("./dog-owner-profile.controller");
let DogOwnerProfileModule = class DogOwnerProfileModule {
};
DogOwnerProfileModule = __decorate([
    (0, common_1.Module)({
        controllers: [dog_owner_profile_controller_1.DogOwnerProfileController],
        providers: [dog_owner_profile_service_1.DogOwnerProfileService],
        exports: [dog_owner_profile_service_1.DogOwnerProfileService],
    })
], DogOwnerProfileModule);
exports.DogOwnerProfileModule = DogOwnerProfileModule;
//# sourceMappingURL=dog-owner-profile.module.js.map