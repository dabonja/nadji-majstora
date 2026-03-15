import { Injectable } from '@nestjs/common';
import { mockComments } from './mockComments';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  findByMaster(masterId: number) {
    return mockComments.filter((c) => c.masterId === masterId);
  }

  create(data: CreateCommentDto) {
    const comment = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      likes: 0,
      dislikes: 0,
      ...data,
    };

    mockComments.unshift(comment);

    return comment;
  }
}
