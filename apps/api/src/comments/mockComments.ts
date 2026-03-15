import { MasterComment } from './types/comment.type';

export const mockComments: MasterComment[] = [
  {
    id: 1,
    masterId: 1,
    user: 'Milan',
    text: 'Odličan majstor!',
    date: '2024-01-10',
    likes: 3,
    dislikes: 0,
  },
  {
    id: 2,
    masterId: 1,
    user: 'Ana',
    text: 'Brzo završio posao.',
    date: '2024-01-12',
    likes: 2,
    dislikes: 1,
  },
];
