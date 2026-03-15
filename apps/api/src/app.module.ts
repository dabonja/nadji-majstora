import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastersController } from './masters/masters.controller';
import { MastersService } from './masters/masters.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
@Module({
  imports: [],
  controllers: [AppController, MastersController, CommentsController],
  providers: [AppService, MastersService, CommentsService],
})
export class AppModule {}
