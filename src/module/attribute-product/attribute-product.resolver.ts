import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AttributeProductService } from './attribute-product.service';
import { CreateAttributeProductInput } from './dto/create-attribute-product.input';
import { UpdateAttributeProductInput } from './dto/update-attribute-product.input';
import { AttributeProduct } from './domain/attribute-product';

@Resolver(() => AttributeProduct)
export class AttributeProductResolver {
  constructor(
    private readonly attributeProductService: AttributeProductService,
  ) {}

  @Mutation(() => AttributeProduct)
  createAttributeProduct(
    @Args('createAttributeProductInput')
    createAttributeProductInput: CreateAttributeProductInput,
  ) {
    return this.attributeProductService.create(createAttributeProductInput);
  }

  @Query(() => [AttributeProduct], { name: 'attributeProduct' })
  findAll() {
    return this.attributeProductService.findAll();
  }

  @Query(() => AttributeProduct, { name: 'attributeProduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeProductService.findOne(id);
  }

  @Mutation(() => AttributeProduct)
  updateAttributeProduct(
    @Args('updateAttributeProductInput')
    updateAttributeProductInput: UpdateAttributeProductInput,
  ) {
    return this.attributeProductService.update(
      updateAttributeProductInput.id,
      updateAttributeProductInput,
    );
  }

  @Mutation(() => AttributeProduct)
  removeAttributeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.attributeProductService.remove(id);
  }
}
