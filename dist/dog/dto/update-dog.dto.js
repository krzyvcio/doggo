"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dog_dto_1 = require("./create-dog.dto");
class UpdateDogDto extends (0, mapped_types_1.PartialType)(create_dog_dto_1.CreateDogDto) {
}
exports.UpdateDogDto = UpdateDogDto;
//# sourceMappingURL=update-dog.dto.js.map