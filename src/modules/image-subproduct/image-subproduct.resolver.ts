import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ImageSubproductService } from './image-subproduct.service';
import { CreateImageSubproductInput } from './dto/create-image-subproduct.input';
import { UpdateImageSubproductInput } from './dto/update-image-subproduct.input';
import { ImageSubproduct } from '@/modules/image-subproduct/domain/image-subproduct';

@Resolver(() => ImageSubproduct)
export class ImageSubproductResolver {
  constructor(
    private readonly imageSubproductService: ImageSubproductService,
  ) {}

  @Mutation(() => ImageSubproduct)
  createImageSubproduct(
    @Args('createImageSubproductInput')
    createImageSubproductInput: CreateImageSubproductInput,
  ) {
    return this.imageSubproductService.create(createImageSubproductInput);
  }

  @Query(() => [ImageSubproduct], { name: 'imageSubproduct' })
  findAll() {
    return this.imageSubproductService.findAll();
  }

  @Query(() => ImageSubproduct, { name: 'imageSubproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageSubproductService.findOne(id);
  }

  @Mutation(() => ImageSubproduct)
  updateImageSubproduct(
    @Args('updateImageSubproductInput')
    updateImageSubproductInput: UpdateImageSubproductInput,
  ) {
    return this.imageSubproductService.update(
      updateImageSubproductInput.id,
      updateImageSubproductInput,
    );
  }

  @Mutation(() => ImageSubproduct)
  removeImageSubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.imageSubproductService.remove(id);
  }
}
