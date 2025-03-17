import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubproductVideoService } from './subproduct-video.service';
import { CreateSubproductVideoInput } from './dto/create-subproduct-video.input';
import { UpdateSubproductVideoInput } from './dto/update-subproduct-video.input';
import { SubproductVideo } from '@/modules/subproduct-video/domain/subproduct-video';

@Resolver(() => SubproductVideo)
export class SubproductVideoResolver {
  constructor(
    private readonly subproductVideoService: SubproductVideoService,
  ) {}

  @Mutation(() => SubproductVideo)
  createSubproductVideo(
    @Args('createSubproductVideoInput')
    createSubproductVideoInput: CreateSubproductVideoInput,
  ) {
    return this.subproductVideoService.create(createSubproductVideoInput);
  }

  @Query(() => [SubproductVideo], { name: 'subproductVideo' })
  findAll() {
    return this.subproductVideoService.findAll();
  }

  @Query(() => SubproductVideo, { name: 'subproductVideo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subproductVideoService.findOne(id);
  }

  @Mutation(() => SubproductVideo)
  updateSubproductVideo(
    @Args('updateSubproductVideoInput')
    updateSubproductVideoInput: UpdateSubproductVideoInput,
  ) {
    return this.subproductVideoService.update(
      updateSubproductVideoInput.id,
      updateSubproductVideoInput,
    );
  }

  @Mutation(() => SubproductVideo)
  removeSubproductVideo(@Args('id', { type: () => Int }) id: number) {
    return this.subproductVideoService.remove(id);
  }
}
