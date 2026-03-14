// src/services/mockMasters.ts
export interface Master {
  id: number;
  name: string;
  profession: string;
  rating: number;
  available: boolean;
  experience: number; // godine iskustva
  reviews: number;    // broj recenzija
  image?: string;     // opcionalna slika
}

export const masters: Master[] = [
  { id: 1, name: "Marko Petrović", profession: "električar", rating: 4.8, available: true, experience: 10, reviews: 32, image: "https://i.pravatar.cc/150?img=12" },
  { id: 2, name: "Nikola Jovanović", profession: "vodoinstalater", rating: 4.6, available: false, experience: 8, reviews: 21, image: "https://i.pravatar.cc/150?img=8" },
  { id: 3, name: "Jovana Stanković", profession: "stolar", rating: 4.9, available: true, experience: 12, reviews: 40, image: "https://i.pravatar.cc/150?img=15" },
  { id: 4, name: "Ana Ilić", profession: "zidar", rating: 4.4, available: true, experience: 7, reviews: 18, image: "https://i.pravatar.cc/150?img=5" },
  { id: 5, name: "Petar Nikolić", profession: "santehničar", rating: 4.7, available: false, experience: 9, reviews: 25, image: "https://i.pravatar.cc/150?img=25" },
  { id: 6, name: "Miloš Radovanović", profession: "tesar", rating: 4.5, available: true, experience: 11, reviews: 30, image: "https://i.pravatar.cc/150?img=35" },
  { id: 7, name: "Ivana Pavlović", profession: "keramičar", rating: 4.3, available: true, experience: 6, reviews: 15, image: "https://i.pravatar.cc/150?img=45" },
  { id: 8, name: "Aleksandar Jović", profession: "slikar", rating: 4.6, available: false, experience: 10, reviews: 20, image: "https://i.pravatar.cc/150?img=55" },
  { id: 9, name: "Marija Todorović", profession: "keramičar", rating: 4.7, available: true, experience: 9, reviews: 22, image: "https://i.pravatar.cc/150?img=65" },
  { id: 10, name: "Vladimir Milenković", profession: "stolar", rating: 4.8, available: true, experience: 14, reviews: 35, image: "https://i.pravatar.cc/150?img=75" },
  { id: 11, name: "Tamara Savić", profession: "električar", rating: 4.5, available: true, experience: 8, reviews: 19, image: "https://i.pravatar.cc/150?img=85" },
  { id: 12, name: "Nenad Kostić", profession: "vodoinstalater", rating: 4.6, available: false, experience: 12, reviews: 28, image: "https://i.pravatar.cc/150?img=95" },
  { id: 13, name: "Kristina Stojanović", profession: "santehničar", rating: 4.4, available: true, experience: 7, reviews: 16, image: "https://i.pravatar.cc/150?img=6" },
  { id: 14, name: "Mladen Popović", profession: "tesar", rating: 4.7, available: true, experience: 13, reviews: 33, image: "https://i.pravatar.cc/150?img=16" },
  { id: 15, name: "Sanja Ristić", profession: "slikar", rating: 4.5, available: false, experience: 9, reviews: 21, image: "https://i.pravatar.cc/150?img=26" },
  { id: 16, name: "Dragan Lukić", profession: "zidar", rating: 4.8, available: true, experience: 15, reviews: 38, image: "https://i.pravatar.cc/150?img=36" },
  { id: 17, name: "Milica Vuković", profession: "stolar", rating: 4.6, available: true, experience: 11, reviews: 27, image: "https://i.pravatar.cc/150?img=46" },
  { id: 18, name: "Bojan Nikolić", profession: "električar", rating: 4.5, available: false, experience: 10, reviews: 24, image: "https://i.pravatar.cc/150?img=56" },
  { id: 19, name: "Ivana Marković", profession: "keramičar", rating: 4.7, available: true, experience: 8, reviews: 20, image: "https://i.pravatar.cc/150?img=66" },
  { id: 20, name: "Filip Stanković", profession: "vodoinstalater", rating: 4.9, available: true, experience: 14, reviews: 42, image: "https://i.pravatar.cc/150?img=76" },
  { id: 21, name: "Tanja Petrović", profession: "tesar", rating: 4.6, available: true, experience: 12, reviews: 29, image: "https://i.pravatar.cc/150?img=86" },
];