import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get(':masterId')
  getByMaster(@Param('masterId') masterId: string) {
    return this.commentsService.findByMaster(Number(masterId));
  }

  @Post()
  create(@Body() data: CreateCommentDto) {
    return this.commentsService.create(data);
  }
}
