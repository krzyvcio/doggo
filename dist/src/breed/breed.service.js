"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const breedJson = require("../../data/breeds.json");
let BreedService = class BreedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBreedDto) {
        return await this.prisma.breed.create({
            data: createBreedDto,
        });
    }
    async findAll(limit, offset) {
        return await this.prisma.breed.findMany({
            take: limit,
            skip: offset,
        });
    }
    async findOne(id) {
        return await this.prisma.breed.findUnique({
            where: {
                id: id,
            },
        });
    }
    async update(id, updateBreedDto) {
        return await this.prisma.breed.update({
            where: {
                id: id,
            },
            data: updateBreedDto,
        });
    }
    async remove(id) {
        return await this.prisma.breed.delete({
            where: {
                id: id,
            },
        });
    }
    async seed() {
        var _a, e_1, _b, _c;
        const breeds = breedJson.map((breed) => {
            return {
                name: breed.polish,
                englishName: breed.english,
            };
        });
        let i = 0;
        try {
            for (var _d = true, breeds_1 = __asyncValues(breeds), breeds_1_1; breeds_1_1 = await breeds_1.next(), _a = breeds_1_1.done, !_a;) {
                _c = breeds_1_1.value;
                _d = false;
                try {
                    const breed = _c;
                    const breedExists = await this.prisma.breed.findFirst({
                        where: {
                            name: breed.name,
                        },
                    });
                    if (breedExists) {
                        console.log('breedExists', breed.name);
                        continue;
                    }
                    await this.prisma.breed.create({
                        data: breed,
                    });
                    i++;
                }
                finally {
                    _d = true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = breeds_1.return)) await _b.call(breeds_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return i;
    }
};
BreedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BreedService);
exports.BreedService = BreedService;
//# sourceMappingURL=breed.service.js.map