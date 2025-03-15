import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AttributeSubproductService } from './attribute-subproduct.service';
import { CreateAttributeSubproductInput } from './dto/create-attribute-subproduct.input';
import { UpdateAttributeSubproductInput } from './dto/update-attribute-subproduct.input';
import { AttributeSubproduct } from './domain/attribute-subproduct';

@Resolver(() => AttributeSubproduct)
export class AttributeSubproductResolver {
  constructor(
    private readonly attributeSubproductService: AttributeSubproductService,
  ) {}

  @Mutation(() => AttributeSubproduct)
  createAttributeSubproduct(
    @Args('createAttributeSubproductInput')
    createAttributeSubproductInput: CreateAttributeSubproductInput,
  ) {
    return this.attributeSubproductService.create(
      createAttributeSubproductInput,
    );
  }

  @Query(() => [AttributeSubproduct], { name: 'attributeSubproduct' })
  findAll() {
    return this.attributeSubproductService.findAll();
  }

  @Query(() => AttributeSubproduct, { name: 'attributeSubproduct' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeSubproductService.findOne(id);
  }

  @Mutation(() => AttributeSubproduct)
  updateAttributeSubproduct(
    @Args('updateAttributeSubproductInput')
    updateAttributeSubproductInput: UpdateAttributeSubproductInput,
  ) {
    return this.attributeSubproductService.update(
      updateAttributeSubproductInput.id,
      updateAttributeSubproductInput,
    );
  }

  @Mutation(() => AttributeSubproduct)
  removeAttributeSubproduct(@Args('id', { type: () => Int }) id: number) {
    return this.attributeSubproductService.remove(id);
  }
}
