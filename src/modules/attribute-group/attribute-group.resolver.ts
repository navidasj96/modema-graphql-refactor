import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroup } from './domain/attribute-group';

@Resolver(() => AttributeGroup)
export class AttributeGroupResolver {
  constructor(private readonly attributeGroupService: AttributeGroupService) {}

  // @Mutation(() => AttributeGroup)
  // createAttributeGroup(
  //   @Args('createAttributeGroupInput')
  //   createAttributeGroupInput: CreateAttributeGroupInput,
  // ) {
  //   return this.attributeGroupService.create();
  // }

  // @Query(() => [AttributeGroup], { name: 'attributeGroup' })
  // findAll() {
  //   return this.attributeGroupService.findAll();
  // }

  @Query(() => AttributeGroup, { name: 'attributeGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attributeGroupService.findOne(id);
  }

  // @Mutation(() => AttributeGroup)
  // updateAttributeGroup(
  //   @Args('updateAttributeGroupInput')
  //   updateAttributeGroupInput: UpdateAttributeGroupInput,
  // ) {
  //   return this.attributeGroupService.update(
  //     updateAttributeGroupInput.id,
  //     updateAttributeGroupInput,
  //   );
  // }

  // @Mutation(() => AttributeGroup)
  // removeAttributeGroup(@Args('id', { type: () => Int }) id: number) {
  //   return this.attributeGroupService.remove(id);
  // }
}
