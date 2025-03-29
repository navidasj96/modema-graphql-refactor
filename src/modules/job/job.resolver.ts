import { Resolver } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from '@/modules/job/domain/job';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}
}
