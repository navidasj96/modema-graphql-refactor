import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivityService } from './activity.service';
import { CreateActivityInput } from './dto/create-activity.input';
import { UpdateActivityInput } from './dto/update-activity.input';
import { Activity } from './domain/activity';

@Resolver(() => Activity)
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  @Mutation(() => Activity)
  createActivity(
    @Args('createActivityInput') createActivityInput: CreateActivityInput,
  ) {
    return this.activityService.create(createActivityInput);
  }

  @Query(() => [Activity], { name: 'activity' })
  findAll() {
    return this.activityService.findAll();
  }

  // @Query(() => Activity, { name: 'activity' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.activityService.findOne(id);
  // }

  @Mutation(() => Activity)
  updateActivity(
    @Args('updateActivityInput') updateActivityInput: UpdateActivityInput,
  ) {
    return this.activityService.update(
      updateActivityInput.id,
      updateActivityInput,
    );
  }

  @Mutation(() => Activity)
  removeActivity(@Args('id', { type: () => Int }) id: number) {
    return this.activityService.remove(id);
  }
}
