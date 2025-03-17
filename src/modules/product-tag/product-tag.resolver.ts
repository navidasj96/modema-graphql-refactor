import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductTagService } from './product-tag.service';
import { CreateProductTagInput } from './dto/create-product-tag.input';
import { UpdateProductTagInput } from './dto/update-product-tag.input';
import { ProductTag } from '@/modules/product-tag/domain/product-tag';

@Resolver(() => ProductTag)
export class ProductTagResolver {
  constructor(private readonly productTagService: ProductTagService) {}

  @Mutation(() => ProductTag)
  createProductTag(
    @Args('createProductTagInput') createProductTagInput: CreateProductTagInput,
  ) {
    return this.productTagService.create(createProductTagInput);
  }

  @Query(() => [ProductTag], { name: 'productTag' })
  findAll() {
    return this.productTagService.findAll();
  }

  @Query(() => ProductTag, { name: 'productTag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productTagService.findOne(id);
  }

  @Mutation(() => ProductTag)
  updateProductTag(
    @Args('updateProductTagInput') updateProductTagInput: UpdateProductTagInput,
  ) {
    return this.productTagService.update(
      updateProductTagInput.id,
      updateProductTagInput,
    );
  }

  @Mutation(() => ProductTag)
  removeProductTag(@Args('id', { type: () => Int }) id: number) {
    return this.productTagService.remove(id);
  }
}
