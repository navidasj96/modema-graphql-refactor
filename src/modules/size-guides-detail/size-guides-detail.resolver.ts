import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SizeGuidesDetailService } from './size-guides-detail.service';
import { CreateSizeGuidesDetailInput } from './dto/create-size-guides-detail.input';
import { UpdateSizeGuidesDetailInput } from './dto/update-size-guides-detail.input';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/domain/size-guides-detail';

@Resolver(() => SizeGuidesDetail)
export class SizeGuidesDetailResolver {
  constructor(
    private readonly sizeGuidesDetailService: SizeGuidesDetailService,
  ) {}

  @Mutation(() => SizeGuidesDetail)
  createSizeGuidesDetail(
    @Args('createSizeGuidesDetailInput')
    createSizeGuidesDetailInput: CreateSizeGuidesDetailInput,
  ) {
    return this.sizeGuidesDetailService.create(createSizeGuidesDetailInput);
  }

  @Query(() => [SizeGuidesDetail], { name: 'sizeGuidesDetail' })
  findAll() {
    return this.sizeGuidesDetailService.findAll();
  }

  @Query(() => SizeGuidesDetail, { name: 'sizeGuidesDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sizeGuidesDetailService.findOne(id);
  }

  @Mutation(() => SizeGuidesDetail)
  updateSizeGuidesDetail(
    @Args('updateSizeGuidesDetailInput')
    updateSizeGuidesDetailInput: UpdateSizeGuidesDetailInput,
  ) {
    return this.sizeGuidesDetailService.update(
      updateSizeGuidesDetailInput.id,
      updateSizeGuidesDetailInput,
    );
  }

  @Mutation(() => SizeGuidesDetail)
  removeSizeGuidesDetail(@Args('id', { type: () => Int }) id: number) {
    return this.sizeGuidesDetailService.remove(id);
  }
}
