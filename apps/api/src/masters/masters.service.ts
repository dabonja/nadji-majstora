import { Injectable } from '@nestjs/common';
import { mockMasters } from './mockMasters';
import { CreateMasterDto } from './dto/create-master.dto';

@Injectable()
export class MastersService {
  findAll(profession?: string, city?: string) {
    let result = mockMasters;

    if (profession) {
      result = result.filter(
        (m) => m.profession.toLowerCase() === profession.toLowerCase(),
      );
    }

    if (city) {
      result = result.filter(
        (m) => m.city.toLowerCase() === city.toLowerCase(),
      );
    }

    return result;
  }

  findOne(id: number) {
    return mockMasters.find((m) => m.id === id);
  }

  createMaster(data: CreateMasterDto) {
    const newMaster = {
      id: Date.now(),
      rating: 0,
      reviews: 0,
      available: true,
      ...data,
    };

    mockMasters.push(newMaster);

    return newMaster;
  }
}
