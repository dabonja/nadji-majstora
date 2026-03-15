export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(endpoint: string) {
    const res = await fetch(`${this.baseUrl}${endpoint}`);

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  }

  async post(endpoint: string, body: any) {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
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
}

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
