import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AttributeService } from './attribute.service';
import { CreateAttributeInput } from './dto/create-attribute.input';
import { UpdateAttributeInput } from './dto/update-attribute.input';
import { Attribute } from './domain/attribute';

@Resolver(() => Attribute)
export class AttributeResolver {
  constructor(private readonly attributeService: AttributeService) {}

  @Mutation(() => Attribute)
  createAttribute(
    @Args('createAttributeInput') createAttributeInput: CreateAttributeInput,
  ) {
    return this.attributeService.create(createAttributeInput);
  }

  @Query(() => [Attribute], { name: 'attribute' })
  findAll() {
    return this.attributeService.findAll();
  }

  @Query(() => Attribute, { name: 'attribute' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeService.findOne(id);
  }

  @Mutation(() => Attribute)
  updateAttribute(
    @Args('updateAttributeInput') updateAttributeInput: UpdateAttributeInput,
  ) {
    return this.attributeService.update(
      updateAttributeInput.id,
      updateAttributeInput,
    );
  }

  @Mutation(() => Attribute)
  removeAttribute(@Args('id', { type: () => Int }) id: number) {
    return this.attributeService.remove(id);
  }
}
