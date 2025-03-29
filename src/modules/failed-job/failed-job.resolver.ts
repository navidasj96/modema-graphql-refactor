import { Resolver } from '@nestjs/graphql';
import { FailedJobService } from './failed-job.service';
import { FailedJob } from './domain/failed-job';

@Resolver(() => FailedJob)
export class FailedJobResolver {
  constructor(private readonly failedJobService: FailedJobService) {}
}
