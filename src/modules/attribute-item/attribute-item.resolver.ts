import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AttributeItemService } from './attribute-item.service';
import { CreateAttributeItemInput } from './dto/create-attribute-item.input';
import { UpdateAttributeItemInput } from './dto/update-attribute-item.input';
import { AttributeItem } from './domain/attribute-item';

@Resolver(() => AttributeItem)
export class AttributeItemResolver {
  constructor(private readonly attributeItemService: AttributeItemService) {}

  @Mutation(() => AttributeItem)
  createAttributeItem(
    @Args('createAttributeItemInput')
    createAttributeItemInput: CreateAttributeItemInput,
  ) {
    return this.attributeItemService.create(createAttributeItemInput);
  }

  @Query(() => [AttributeItem], { name: 'attributeItem' })
  findAll() {
    return this.attributeItemService.findAll();
  }

  @Query(() => AttributeItem, { name: 'attributeItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeItemService.findOne(id);
  }

  @Mutation(() => AttributeItem)
  updateAttributeItem(
    @Args('updateAttributeItemInput')
    updateAttributeItemInput: UpdateAttributeItemInput,
  ) {
    return this.attributeItemService.update(
      updateAttributeItemInput.id,
      updateAttributeItemInput,
    );
  }

  @Mutation(() => AttributeItem)
  removeAttributeItem(@Args('id', { type: () => Int }) id: number) {
    return this.attributeItemService.remove(id);
  }
}
