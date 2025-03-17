import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductVideoService } from './product-video.service';
import { CreateProductVideoInput } from './dto/create-product-video.input';
import { UpdateProductVideoInput } from './dto/update-product-video.input';
import { ProductVideo } from '@/modules/product-video/domain/product-video';

@Resolver(() => ProductVideo)
export class ProductVideoResolver {
  constructor(private readonly productVideoService: ProductVideoService) {}

  @Mutation(() => ProductVideo)
  createProductVideo(
    @Args('createProductVideoInput')
    createProductVideoInput: CreateProductVideoInput,
  ) {
    return this.productVideoService.create(createProductVideoInput);
  }

  @Query(() => [ProductVideo], { name: 'productVideo' })
  findAll() {
    return this.productVideoService.findAll();
  }

  @Query(() => ProductVideo, { name: 'productVideo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productVideoService.findOne(id);
  }

  @Mutation(() => ProductVideo)
  updateProductVideo(
    @Args('updateProductVideoInput')
    updateProductVideoInput: UpdateProductVideoInput,
  ) {
    return this.productVideoService.update(
      updateProductVideoInput.id,
      updateProductVideoInput,
    );
  }

  @Mutation(() => ProductVideo)
  removeProductVideo(@Args('id', { type: () => Int }) id: number) {
    return this.productVideoService.remove(id);
  }
}
