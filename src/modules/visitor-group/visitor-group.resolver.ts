import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VisitorGroupService } from './visitor-group.service';
import { CreateVisitorGroupInput } from './dto/create-visitor-group.input';
import { UpdateVisitorGroupInput } from './dto/update-visitor-group.input';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';

@Resolver(() => VisitorGroup)
export class VisitorGroupResolver {
  constructor(private readonly visitorGroupService: VisitorGroupService) {}

  @Mutation(() => VisitorGroup)
  createVisitorGroup(
    @Args('createVisitorGroupInput')
    createVisitorGroupInput: CreateVisitorGroupInput,
  ) {
    return this.visitorGroupService.create(createVisitorGroupInput);
  }

  @Query(() => [VisitorGroup], { name: 'visitorGroup' })
  findAll() {
    return this.visitorGroupService.findAll();
  }

  @Query(() => VisitorGroup, { name: 'visitorGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorGroupService.findOne(id);
  }

  @Mutation(() => VisitorGroup)
  updateVisitorGroup(
    @Args('updateVisitorGroupInput')
    updateVisitorGroupInput: UpdateVisitorGroupInput,
  ) {
    return this.visitorGroupService.update(
      updateVisitorGroupInput.id,
      updateVisitorGroupInput,
    );
  }

  @Mutation(() => VisitorGroup)
  removeVisitorGroup(@Args('id', { type: () => Int }) id: number) {
    return this.visitorGroupService.remove(id);
  }
}
