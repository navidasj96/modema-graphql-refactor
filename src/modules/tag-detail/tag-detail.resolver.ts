import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagDetailService } from './tag-detail.service';
import { CreateTagDetailInput } from './dto/create-tag-detail.input';
import { UpdateTagDetailInput } from './dto/update-tag-detail.input';
import { TagDetail } from '@/modules/tag-detail/domain/tag-detail';

@Resolver(() => TagDetail)
export class TagDetailResolver {
  constructor(private readonly tagDetailService: TagDetailService) {}

  @Mutation(() => TagDetail)
  createTagDetail(
    @Args('createTagDetailInput') createTagDetailInput: CreateTagDetailInput
  ) {
    return this.tagDetailService.create(createTagDetailInput);
  }

  @Query(() => [TagDetail], { name: 'tagDetail' })
  findAll() {
    return this.tagDetailService.findAll();
  }

  @Query(() => TagDetail, { name: 'tagDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tagDetailService.findOne(id);
  }

  @Mutation(() => TagDetail)
  updateTagDetail(
    @Args('updateTagDetailInput') updateTagDetailInput: UpdateTagDetailInput
  ) {
    return this.tagDetailService.update(
      updateTagDetailInput.id,
      updateTagDetailInput
    );
  }

  @Mutation(() => TagDetail)
  removeTagDetail(@Args('id', { type: () => Int }) id: number) {
    return this.tagDetailService.remove(id);
  }
}
