import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Patch,
} from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';

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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mastersService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: CreateMasterDto) {
    return this.mastersService.createMaster(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.mastersService.updateMaster(Number(id), data);
  }
}
