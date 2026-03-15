// src/services/mockComments.ts
export interface MasterComment {
  id: number;
  masterId: number;    // ID majstora na kojeg se komentar odnosi
  user: string;        // ime korisnika koji je ostavio komentar
  text: string;        // sam tekst komentara
  date: string;        // datum komentara
  likes: number;
  dislikes: number;
}

// primer komentara
export const mockComments: MasterComment[] = [
  {
    id: 1,
    masterId: 1,
    user: 'Milan Marković',
    text: 'Odličan električar, brzo i precizno uradio posao!',
    date: '2026-03-10',
    likes: 3,
    dislikes: 0,
  },
  {
    id: 2,
    masterId: 2,
    user: 'Jelena Petrović',
    text: 'Vodoinstalater je stigao na vreme i sve sredio.',
    date: '2026-03-12',
    likes: 5,
    dislikes: 1,
  },
];