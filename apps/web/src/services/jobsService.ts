// src/services/jobsApi.ts
import { ApiClient } from "./apiClient";
import type { JobOffer } from "./mockJobs";


class JobsApi {
  private api = new ApiClient("http://localhost:3000");

  getAllJobs(): Promise<JobOffer[]> {
    return this.api.get<JobOffer[]>("/jobs");
  }

  getJobById(id: number): Promise<JobOffer> {
    return this.api.get<JobOffer>(`/jobs/${id}`);
  }
}

export const jobsApi = new JobsApi();