import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AttributeAttributeGroupService } from './attribute-attribute-group.service';
import { CreateAttributeAttributeGroupInput } from './dto/create-attribute-attribute-group.input';
import { UpdateAttributeAttributeGroupInput } from './dto/update-attribute-attribute-group.input';
import { AttributeAttributeGroup } from './domain/attribute-attribute-group';

@Resolver(() => AttributeAttributeGroup)
export class AttributeAttributeGroupResolver {
  constructor(
    private readonly attributeAttributeGroupService: AttributeAttributeGroupService,
  ) {}

  @Mutation(() => AttributeAttributeGroup)
  createAttributeAttributeGroup(
    @Args('createAttributeAttributeGroupInput')
    createAttributeAttributeGroupInput: CreateAttributeAttributeGroupInput,
  ) {
    return this.attributeAttributeGroupService.create(
      createAttributeAttributeGroupInput,
    );
  }

  @Query(() => [AttributeAttributeGroup], { name: 'attributeAttributeGroup' })
  findAll() {
    return this.attributeAttributeGroupService.findAll();
  }

  @Query(() => AttributeAttributeGroup, { name: 'attributeAttributeGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeAttributeGroupService.findOne(id);
  }

  @Mutation(() => AttributeAttributeGroup)
  updateAttributeAttributeGroup(
    @Args('updateAttributeAttributeGroupInput')
    updateAttributeAttributeGroupInput: UpdateAttributeAttributeGroupInput,
  ) {
    return this.attributeAttributeGroupService.update(
      updateAttributeAttributeGroupInput.id,
      updateAttributeAttributeGroupInput,
    );
  }

  @Mutation(() => AttributeAttributeGroup)
  removeAttributeAttributeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.attributeAttributeGroupService.remove(id);
  }
}
