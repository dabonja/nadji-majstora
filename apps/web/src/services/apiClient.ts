// src/services/apiClient.ts
export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }

 async get<T>(endpoint: string): Promise<T> {
  const res = await fetch(this.buildUrl(endpoint));
  if (!res.ok) throw new Error("API error");
  return res.json() as Promise<T>; // cast na T
}

  async post<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(this.buildUrl(endpoint), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  }

  async patch<T>(endpoint: string, body: any): Promise<T> {
    const res = await fetch(this.buildUrl(endpoint), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  }
}

// 🔹 Exportujemo instancu da se koristi svuda
export const apiClient = new ApiClient("http://localhost:3000");

// const API_URL = "http://localhost:3000";

// export const apiClient = async (endpoint: string, options?: RequestInit) => {
//   const res = await fetch(`${API_URL}${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...options,
//   });

//   if (!res.ok) {
//     throw new Error("API greška");
//   }

//   return res.json();
// };



// const API_URL = "http://localhost:3000";

// export const apiClient = async (endpoint: string, options?: RequestInit) => {
//   const res = await fetch(`${API_URL}${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     ...options,
//   });

//   if (!res.ok) {
//     throw new Error("API greška");
//   }

//   return res.json();
// };
