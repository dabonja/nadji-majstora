import { Injectable } from '@nestjs/common';

@Injectable()
export class MastersService {
  private masters = [
    {
      id: 1,
      name: 'Marko Petrović',
      profession: 'Vodoinstalater',
      city: 'Beograd',
      phone: '064123456',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Ivan Jovanović',
      profession: 'Električar',
      city: 'Novi Sad',
      phone: '063222333',
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Petar Nikolić',
      profession: 'Vodoinstalater',
      city: 'Beograd',
      phone: '065999888',
      rating: 4.9,
    },
  ];

  findAll(profession?: string, city?: string) {
    let result = this.masters;

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
}
