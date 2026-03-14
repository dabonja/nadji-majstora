import { Controller, Get, Query } from '@nestjs/common';
import { MastersService } from './masters.service';

@Controller('masters')
export class MastersController {
  constructor(private mastersService: MastersService) {}

  @Get()
  findAll(
    @Query('profession') profession?: string,
    @Query('city') city?: string,
  ) {
    return this.mastersService.findAll(profession, city);
  }
}
