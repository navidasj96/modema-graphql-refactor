import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductColorImageService } from './product-color-image.service';
import { CreateProductColorImageInput } from './dto/create-product-color-image.input';
import { UpdateProductColorImageInput } from './dto/update-product-color-image.input';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image';

@Resolver(() => ProductColorImage)
export class ProductColorImageResolver {
  constructor(
    private readonly productColorImageService: ProductColorImageService,
  ) {}

  @Mutation(() => ProductColorImage)
  createProductColorImage(
    @Args('createProductColorImageInput')
    createProductColorImageInput: CreateProductColorImageInput,
  ) {
    return this.productColorImageService.create(createProductColorImageInput);
  }

  @Query(() => [ProductColorImage], { name: 'productColorImage' })
  findAll() {
    return this.productColorImageService.findAll();
  }

  @Query(() => ProductColorImage, { name: 'productColorImage' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productColorImageService.findOne(id);
  }

  @Mutation(() => ProductColorImage)
  updateProductColorImage(
    @Args('updateProductColorImageInput')
    updateProductColorImageInput: UpdateProductColorImageInput,
  ) {
    return this.productColorImageService.update(
      updateProductColorImageInput.id,
      updateProductColorImageInput,
    );
  }

  @Mutation(() => ProductColorImage)
  removeProductColorImage(@Args('id', { type: () => Int }) id: number) {
    return this.productColorImageService.remove(id);
  }
}
