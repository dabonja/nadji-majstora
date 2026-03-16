import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Master, mockMasters } from './mockMasters';
import { CreateMasterDto } from './dto/create-master.dto';

@Injectable()
export class MastersService {
  findAll(profession?: string, city?: string): Master[] {
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

  findOne(id: number): Master | undefined {
    return mockMasters.find((m) => m.id === id);
  }

  createMaster(data: CreateMasterDto): Master {
    const newMaster: Master = {
      id: Date.now(), // za demo purposes
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
    data: Partial<Master>,
    account: { id: number; role: 'user' | 'master'; masterId?: number },
  ): Master {
    const master = mockMasters.find((m) => m.id === id);
    if (!master) {
      throw new HttpException('Master not found', HttpStatus.NOT_FOUND);
    }

    // 🔹 Provera da li je logovani master vlasnik profila
    if (account.role !== 'master' || account.masterId !== id) {
      throw new HttpException('Unauthorized', HttpStatus.FORBIDDEN);
    }

    Object.assign(master, data);
    return master;
  }
}
