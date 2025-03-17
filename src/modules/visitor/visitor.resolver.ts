import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { VisitorService } from './visitor.service';
import { CreateVisitorInput } from './dto/create-visitor.input';
import { UpdateVisitorInput } from './dto/update-visitor.input';
import { Visitor } from '@/modules/visitor/domain/visitor';

@Resolver(() => Visitor)
export class VisitorResolver {
  constructor(private readonly visitorService: VisitorService) {}

  @Mutation(() => Visitor)
  createVisitor(
    @Args('createVisitorInput') createVisitorInput: CreateVisitorInput,
  ) {
    return this.visitorService.create(createVisitorInput);
  }

  @Query(() => [Visitor], { name: 'visitor' })
  findAll() {
    return this.visitorService.findAll();
  }

  @Query(() => Visitor, { name: 'visitor' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.visitorService.findOne(id);
  }

  @Mutation(() => Visitor)
  updateVisitor(
    @Args('updateVisitorInput') updateVisitorInput: UpdateVisitorInput,
  ) {
    return this.visitorService.update(
      updateVisitorInput.id,
      updateVisitorInput,
    );
  }

  @Mutation(() => Visitor)
  removeVisitor(@Args('id', { type: () => Int }) id: number) {
    return this.visitorService.remove(id);
  }
}
