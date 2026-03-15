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

  updateMaster(
    id: number,
    data: Partial<{
      name: string;
      profession: string;
      city: string;
      phone: string;
      available: boolean;
      image: string;
    }>,
  ) {
    const masterIndex = mockMasters.findIndex((m) => m.id === id);
    if (masterIndex === -1) return null;

    mockMasters[masterIndex] = {
      ...mockMasters[masterIndex],
      ...data,
    };

    return mockMasters[masterIndex];
  }
}
