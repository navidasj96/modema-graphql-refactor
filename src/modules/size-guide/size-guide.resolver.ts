import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SizeGuideService } from './size-guide.service';
import { CreateSizeGuideInput } from './dto/create-size-guide.input';
import { UpdateSizeGuideInput } from './dto/update-size-guide.input';
import { SizeGuide } from '@/modules/size-guide/domain/size-guide';

@Resolver(() => SizeGuide)
export class SizeGuideResolver {
  constructor(private readonly sizeGuideService: SizeGuideService) {}

  @Mutation(() => SizeGuide)
  createSizeGuide(
    @Args('createSizeGuideInput') createSizeGuideInput: CreateSizeGuideInput,
  ) {
    return this.sizeGuideService.create(createSizeGuideInput);
  }

  @Query(() => [SizeGuide], { name: 'sizeGuide' })
  findAll() {
    return this.sizeGuideService.findAll();
  }

  @Query(() => SizeGuide, { name: 'sizeGuide' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sizeGuideService.findOne(id);
  }

  @Mutation(() => SizeGuide)
  updateSizeGuide(
    @Args('updateSizeGuideInput') updateSizeGuideInput: UpdateSizeGuideInput,
  ) {
    return this.sizeGuideService.update(
      updateSizeGuideInput.id,
      updateSizeGuideInput,
    );
  }

  @Mutation(() => SizeGuide)
  removeSizeGuide(@Args('id', { type: () => Int }) id: number) {
    return this.sizeGuideService.remove(id);
  }
}
