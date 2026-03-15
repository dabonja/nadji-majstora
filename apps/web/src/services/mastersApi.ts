import type { CreateMasterDto } from "../types/master";
import { ApiClient } from "./apiClient";

class MastersApi {
  private api: ApiClient;

  constructor() {
    this.api = new ApiClient("http://localhost:3000");
  }

  getMasters(profession?: string, city?: string) {
    let query = "";

    if (profession || city) {
      query = "?";

      if (profession) {
        query += `profession=${profession}`;
      }

      if (city) {
        query += `${profession ? "&" : ""}city=${city}`;
      }
    }

    return this.api.get(`/masters${query}`);
  }

  getMasterById(id: number) {
    return this.api.get(`/masters/${id}`);
  }

  createMaster(data: CreateMasterDto) {
    return this.api.post(`/masters`, data);
  }

  updateMaster(id: number, data: Partial<{
  name: string;
  profession: string;
  city: string;
  phone: string;
  available: boolean;
  image: string;
}>) {
  return this.api.patch(`/masters/${id}`, data);
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