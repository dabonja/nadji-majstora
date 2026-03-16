import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';
import type { Master } from './mockMasters';
import { Account } from 'src/accounts/types/account.type';

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

  @Post(':id/update')
  updateMaster(
    @Param('id') id: string,
    @Body() body: { data: Partial<Master>; account: Account },
  ): Master {
    const { data, account } = body;

    if (!account) {
      throw new HttpException('Account is required', HttpStatus.UNAUTHORIZED);
    }

    return this.mastersService.updateMaster(Number(id), data, account);
  }
}
