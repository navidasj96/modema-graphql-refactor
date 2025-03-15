import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ImageProductService } from './image-product.service';
import { CreateImageProductInput } from './dto/create-image-product.input';
import { UpdateImageProductInput } from './dto/update-image-product.input';
import { ImageProduct } from '@/modules/image-product/domain/image-product';

@Resolver(() => ImageProduct)
export class ImageProductResolver {
  constructor(private readonly imageProductService: ImageProductService) {}

  @Mutation(() => ImageProduct)
  createImageProduct(
    @Args('createImageProductInput')
    createImageProductInput: CreateImageProductInput,
  ) {
    return this.imageProductService.create(createImageProductInput);
  }

  @Query(() => [ImageProduct], { name: 'imageProduct' })
  findAll() {
    return this.imageProductService.findAll();
  }

  @Query(() => ImageProduct, { name: 'imageProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imageProductService.findOne(id);
  }

  @Mutation(() => ImageProduct)
  updateImageProduct(
    @Args('updateImageProductInput')
    updateImageProductInput: UpdateImageProductInput,
  ) {
    return this.imageProductService.update(
      updateImageProductInput.id,
      updateImageProductInput,
    );
  }

  @Mutation(() => ImageProduct)
  removeImageProduct(@Args('id', { type: () => Int }) id: number) {
    return this.imageProductService.remove(id);
  }
}
