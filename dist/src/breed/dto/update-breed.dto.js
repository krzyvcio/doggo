"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBreedDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_breed_dto_1 = require("./create-breed.dto");
class UpdateBreedDto extends (0, mapped_types_1.PartialType)(create_breed_dto_1.CreateBreedDto) {
}
exports.UpdateBreedDto = UpdateBreedDto;
//# sourceMappingURL=update-breed.dto.js.map