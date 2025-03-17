import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RelatedProductService } from './related-product.service';
import { CreateRelatedProductInput } from './dto/create-related-product.input';
import { UpdateRelatedProductInput } from './dto/update-related-product.input';
import { RelatedProduct } from '@/modules/related-product/domain/related-product';

@Resolver(() => RelatedProduct)
export class RelatedProductResolver {
  constructor(private readonly relatedProductService: RelatedProductService) {}

  @Mutation(() => RelatedProduct)
  createRelatedProduct(
    @Args('createRelatedProductInput')
    createRelatedProductInput: CreateRelatedProductInput,
  ) {
    return this.relatedProductService.create(createRelatedProductInput);
  }

  @Query(() => [RelatedProduct], { name: 'relatedProduct' })
  findAll() {
    return this.relatedProductService.findAll();
  }

  @Query(() => RelatedProduct, { name: 'relatedProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.relatedProductService.findOne(id);
  }

  @Mutation(() => RelatedProduct)
  updateRelatedProduct(
    @Args('updateRelatedProductInput')
    updateRelatedProductInput: UpdateRelatedProductInput,
  ) {
    return this.relatedProductService.update(
      updateRelatedProductInput.id,
      updateRelatedProductInput,
    );
  }

  @Mutation(() => RelatedProduct)
  removeRelatedProduct(@Args('id', { type: () => Int }) id: number) {
    return this.relatedProductService.remove(id);
  }
}
