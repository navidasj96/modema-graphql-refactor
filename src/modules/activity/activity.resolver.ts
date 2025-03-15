import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ActivityService } from './activity.service';
import { Activity } from './domain/activity';
import { User } from '@/modules/user/domain/user';

@Resolver(() => Activity)
export class ActivityResolver {
  constructor(private readonly activityService: ActivityService) {}

  @Mutation(() => Activity)
  activityCustomeResolver() {
    return this.activityService.findAll();
  }

  @Query(() => User)
  async getUserWithActivitiesResolver(@Args('userId') userId: number) {
    return await this.activityService.getUserWithActivities(userId);
  }

  @Query(() => Activity)
  async getActivityWithUserResolver(@Args('activityId') activityId: number) {
    return await this.activityService.getActivityWithUser(activityId);
  }

  // @Mutation(() => Activity)
  // createActivity(
  //   @Args('createActivityInput') createActivityInput: CreateActivityInput,
  // ) {
  //   return this.activityService.create(createActivityInput);
  // }
  //
  // @Query(() => [Activity], { name: 'activity' })
  // findAll() {
  //   return this.activityService.findAll();
  // }
  //
  // // @Query(() => Activity, { name: 'activity' })
  // // findOne(@Args('id', { type: () => Int }) id: number) {
  // //   return this.activityService.findOne(id);
  // // }
  //
  // @Mutation(() => Activity)
  // updateActivity(
  //   @Args('updateActivityInput') updateActivityInput: UpdateActivityInput,
  // ) {
  //   return this.activityService.update(
  //     updateActivityInput.id,
  //     updateActivityInput,
  //   );
  // }
  //
  // @Mutation(() => Activity)
  // removeActivity(@Args('id', { type: () => Int }) id: number) {
  //   return this.activityService.remove(id);
  // }
}
