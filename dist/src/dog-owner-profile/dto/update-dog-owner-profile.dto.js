"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDogOwnerProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dog_owner_profile_dto_1 = require("./create-dog-owner-profile.dto");
class UpdateDogOwnerProfileDto extends (0, mapped_types_1.PartialType)(create_dog_owner_profile_dto_1.CreateDogOwnerProfileDto) {
}
exports.UpdateDogOwnerProfileDto = UpdateDogOwnerProfileDto;
//# sourceMappingURL=update-dog-owner-profile.dto.js.map