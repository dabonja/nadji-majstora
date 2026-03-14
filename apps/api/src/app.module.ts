import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastersController } from './masters/masters.controller';
import { MastersService } from './masters/masters.service';
@Module({
  imports: [],
  controllers: [AppController, MastersController],
  providers: [AppService, MastersService],
})
export class AppModule {}
