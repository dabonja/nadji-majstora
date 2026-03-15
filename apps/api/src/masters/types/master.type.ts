export interface Master {
  id: number;
  name: string;
  profession: string;
  rating: number;
  available: boolean;
  experience: number;
  reviews: number;
  city: string;
  phone: string;
  image?: string;
}

export interface CreateMasterDto {
  name: string;
  profession: string;
  city: string;
  phone: string;
  experience: number;
  image?: string;
}
