import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastersController } from './masters/masters.controller';
import { MastersService } from './masters/masters.service';
import { CommentsController } from './comments/comments.controller';
import { CommentsService } from './comments/comments.service';
import { AccountsController } from './accounts/accounts.controller';
import { AccountsService } from './accounts/accounts.service';
import { JobsService } from './jobs/jobs.service';
import { JobsController } from './jobs/jobs.controller';
@Module({
  imports: [],
  controllers: [
    AppController,
    MastersController,
    CommentsController,
    AccountsController,
    JobsController,
  ],
  providers: [
    AppService,
    MastersService,
    CommentsService,
    AccountsService,
    JobsService,
  ],
})
export class AppModule {}
