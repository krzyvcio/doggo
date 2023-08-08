"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDogWalkerProfileDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dog_walker_profile_dto_1 = require("./create-dog-walker-profile.dto");
class UpdateDogWalkerProfileDto extends (0, mapped_types_1.PartialType)(create_dog_walker_profile_dto_1.CreateDogWalkerProfileDto) {
}
exports.UpdateDogWalkerProfileDto = UpdateDogWalkerProfileDto;
//# sourceMappingURL=update-dog-walker-profile.dto.js.map