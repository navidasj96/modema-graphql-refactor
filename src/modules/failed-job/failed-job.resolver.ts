import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FailedJobService } from './failed-job.service';
import { CreateFailedJobInput } from './dto/create-failed-job.input';
import { FailedJob } from './domain/failed-job';

@Resolver(() => FailedJob)
export class FailedJobResolver {
  constructor(private readonly failedJobService: FailedJobService) {}

  @Mutation(() => FailedJob)
  createFailedJob(
    @Args('createFailedJobInput') createFailedJobInput: CreateFailedJobInput,
  ) {
    return this.failedJobService.create(createFailedJobInput);
  }

  @Query(() => [FailedJob], { name: 'failedJob' })
  findAll() {
    return this.failedJobService.findAll();
  }

  @Query(() => FailedJob, { name: 'failedJob' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.failedJobService.findOne(id);
  }

  // @Mutation(() => FailedJob)
  // updateFailedJob(@Args('updateFailedJobInput') updateFailedJobInput: UpdateFailedJobInput) {
  //   return this.failedJobService.update(updateFailedJobInput.id, updateFailedJobInput);
  // }

  @Mutation(() => FailedJob)
  removeFailedJob(@Args('id', { type: () => Int }) id: number) {
    return this.failedJobService.remove(id);
  }
}
