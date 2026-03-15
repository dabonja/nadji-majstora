export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

    private buildUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }

  async get(endpoint: string) {
    const res = await fetch(this.buildUrl(endpoint));

    if (!res.ok) {
      throw new Error("API error");
    }

    return res.json();
  }

  async post(endpoint: string, body: any) {
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

    patch(path: string, data: any) {
    return fetch(this.buildUrl(path), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(res => res.json());
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
