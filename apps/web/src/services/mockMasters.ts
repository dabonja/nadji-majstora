// src/services/mockMasters.ts
export interface Master {
  id: number;
  name: string;
  profession: string;
  rating: number; // 0-5
  available: boolean;
}

export const masters: Master[] = [
  { id: 1, name: 'Marko Petrović', profession: 'Električar', rating: 4.5, available: true },
  { id: 2, name: 'Jelena Jovanović', profession: 'Vodoinstalater', rating: 4.0, available: true },
  { id: 3, name: 'Nikola Ilić', profession: 'Moler', rating: 5.0, available: false },
  { id: 4, name: 'Ana Kostić', profession: 'Zidar', rating: 3.5, available: true },
  { id: 5, name: 'Petar Stojanović', profession: 'Stolar', rating: 4.2, available: false },
  { id: 6, name: 'Ivana Marković', profession: 'Klimatizacija', rating: 4.8, available: true },
  { id: 7, name: 'Milan Popović', profession: 'Električar', rating: 4.1, available: true },
  { id: 8, name: 'Marija Nikolić', profession: 'Vodoinstalater', rating: 3.9, available: false },
  { id: 9, name: 'Vladimir Ristić', profession: 'Moler', rating: 4.7, available: true },
  { id: 10, name: 'Sandra Pavlović', profession: 'Zidar', rating: 4.0, available: false },
  { id: 11, name: 'Stefan Petrović', profession: 'Stolar', rating: 3.8, available: true },
  { id: 12, name: 'Jovana Đorđević', profession: 'Klimatizacija', rating: 4.9, available: true },
  { id: 13, name: 'Marko Nikolić', profession: 'Električar', rating: 4.3, available: false },
  { id: 14, name: 'Maja Jovanović', profession: 'Vodoinstalater', rating: 4.5, available: true },
  { id: 15, name: 'Ivan Kostić', profession: 'Moler', rating: 4.0, available: true },
  { id: 16, name: 'Tanja Stojanović', profession: 'Zidar', rating: 3.9, available: true },
  { id: 17, name: 'Nenad Popović', profession: 'Stolar', rating: 4.6, available: false },
  { id: 18, name: 'Lidija Pavlović', profession: 'Klimatizacija', rating: 4.7, available: true },
  { id: 19, name: 'Aleksandar Ilić', profession: 'Električar', rating: 4.2, available: true },
  { id: 20, name: 'Milica Ristić', profession: 'Vodoinstalater', rating: 4.0, available: false },
  { id: 21, name: 'Dragan Nikolić', profession: 'Moler', rating: 4.1, available: true },
  { id: 22, name: 'Kristina Jovanović', profession: 'Zidar', rating: 4.3, available: true },
  { id: 23, name: 'Filip Petrović', profession: 'Stolar', rating: 4.5, available: true },
  { id: 24, name: 'Sanja Marković', profession: 'Klimatizacija', rating: 4.8, available: false },
  { id: 25, name: 'Dragan Kostić', profession: 'Električar', rating: 3.9, available: true },
];