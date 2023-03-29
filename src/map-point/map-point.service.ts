import { Injectable } from "@nestjs/common";
import { Point } from "geojson";

import { CreateMapPointDto } from "./dto/create-map-point.dto";
import { UpdateMapPointDto } from "./dto/update-map-point.dto";

@Injectable()
export class MapPointService {
  create(createMapPointDto: CreateMapPointDto) {
    const pointObject: Point = {
      type: "Point",
      coordinates: [createMapPointDto.lon, createMapPointDto.lat]
    };
    //location.location = pointObject;
    //return await this.repo.save(location);
  }

  findAll() {
    return `This action returns all mapPoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mapPoint`;
  }

  update(id: number, updateMapPointDto: UpdateMapPointDto) {
    return `This action updates a #${id} mapPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} mapPoint`;
  }
}
