// src/services/mastersApi.ts
import type {  CreateMasterDto, Master } from "../types/master";
import { ApiClient } from "./apiClient";

class MastersApi {
  private api: ApiClient;

  constructor() {
    this.api = new ApiClient("http://localhost:3000");
  }

  // Dobavljanje svih majstora, sa opcionalnim filterima
  getMasters(profession?: string, city?: string): Promise<Master[]> {
    let query = "";

    if (profession || city) {
      query = "?";
      if (profession) query += `profession=${profession}`;
      if (city) query += `${profession ? "&" : ""}city=${city}`;
    }

    return this.api.get<Master[]>(`/masters${query}`);
  }

  // Dobavljanje jednog majstora po ID
  getMasterById(id: number): Promise<Master> {
    return this.api.get<Master>(`/masters/${id}`);
  }

  // Kreiranje novog majstora
  createMaster(data: CreateMasterDto): Promise<Master> {
    return this.api.post<Master>(`/masters`, data);
  }

  // Update majstora
  updateMaster(
    id: number,
    data: Partial<{
      name: string;
      profession: string;
      city: string;
      phone: string;
      available: boolean;
      image: string;
    }>,
  ): Promise<Master> {
    return this.api.patch<Master>(`/masters/${id}`, data);
  }
}

export const mastersApi = new MastersApi();

// import { apiClient } from "./apiClient";

// export const getMasters = (profession?: string, city?: string) => {
//   let query = "";

//   if (profession || city) {
//     query = "?";

//     if (profession) {
//       query += `profession=${profession}`;
//     }

//     if (city) {
//       query += `${profession ? "&" : ""}city=${city}`;
//     }
//   }

//   return apiClient(`/masters${query}`);
// };

// export const getMasterById = (id: number) => {
//   return apiClient(`/masters/${id}`);
// };
