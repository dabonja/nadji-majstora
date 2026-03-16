import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobOffer } from './types/jobs.type';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  getAllJobs(): JobOffer[] {
    return this.jobsService.findAll();
  }

  @Get(':id')
  getJobById(@Param('id') id: string): JobOffer | undefined {
    return this.jobsService.findOne(Number(id));
  }
}
