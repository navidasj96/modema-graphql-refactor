import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubproductSpecialImageService } from './subproduct-special-image.service';
import { CreateSubproductSpecialImageInput } from './dto/create-subproduct-special-image.input';
import { UpdateSubproductSpecialImageInput } from './dto/update-subproduct-special-image.input';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/domain/subproduct-special-image';

@Resolver(() => SubproductSpecialImage)
export class SubproductSpecialImageResolver {
  constructor(
    private readonly subproductSpecialImageService: SubproductSpecialImageService,
  ) {}

  @Mutation(() => SubproductSpecialImage)
  createSubproductSpecialImage(
    @Args('createSubproductSpecialImageInput')
    createSubproductSpecialImageInput: CreateSubproductSpecialImageInput,
  ) {
    return this.subproductSpecialImageService.create(
      createSubproductSpecialImageInput,
    );
  }

  @Query(() => [SubproductSpecialImage], { name: 'subproductSpecialImage' })
  findAll() {
    return this.subproductSpecialImageService.findAll();
  }

  @Query(() => SubproductSpecialImage, { name: 'subproductSpecialImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.subproductSpecialImageService.findOne(id);
  }

  @Mutation(() => SubproductSpecialImage)
  updateSubproductSpecialImage(
    @Args('updateSubproductSpecialImageInput')
    updateSubproductSpecialImageInput: UpdateSubproductSpecialImageInput,
  ) {
    return this.subproductSpecialImageService.update(
      updateSubproductSpecialImageInput.id,
      updateSubproductSpecialImageInput,
    );
  }

  @Mutation(() => SubproductSpecialImage)
  removeSubproductSpecialImage(@Args('id', { type: () => Int }) id: number) {
    return this.subproductSpecialImageService.remove(id);
  }
}
