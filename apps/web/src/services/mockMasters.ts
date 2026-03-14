export type Master = {
  id: number;
  name: string;
  profession: string;
  city: string;
  rating: number;       // 1-5
  available: boolean;
  busyUntil?: string;   // ako nije dostupan
};

export const mastersData: Master[] = [
  { id: 1, name: "Marko Marković", profession: "Vodoinstalater", city: "Beograd", rating: 5, available: true },
  { id: 2, name: "Jovana Jovanović", profession: "Električar", city: "Novi Sad", rating: 4, available: false, busyUntil: "20.03.2026" },
  { id: 3, name: "Ivan Ivić", profession: "Vodoinstalater", city: "Beograd", rating: 3, available: true },
  { id: 4, name: "Ana Anić", profession: "Zidar", city: "Niš", rating: 4, available: false, busyUntil: "25.03.2026" },
  { id: 5, name: "Petar Petrović", profession: "Električar", city: "Beograd", rating: 5, available: true },
];

export const masters = [
  { id: 1, name: 'Marko Marković', profession: 'Vodoinstalater', city: 'Beograd', rating: 4, available: true },
  { id: 2, name: 'Jovana Jovanović', profession: 'Električar', city: 'Novi Sad', rating: 5, available: false, busyUntil: '25.03' },
  { id: 3, name: 'Petar Petrović', profession: 'Moler', city: 'Niš', rating: 3, available: true },
  { id: 4, name: 'Ana Anić', profession: 'Tesar', city: 'Kragujevac', rating: 4, available: true },
];