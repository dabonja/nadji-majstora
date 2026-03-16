// src/accounts/accounts.service.ts
import { Injectable } from '@nestjs/common';
import { mockJobs } from './mockJobs';
import { JobOffer } from './types/jobs.type';

@Injectable()
export class JobsService {
  private jobs = mockJobs;

  findAll(): JobOffer[] {
    return this.jobs;
  }

  findOne(id: number): JobOffer | undefined {
    return this.jobs.find((a) => a.id === id);
  }
}
