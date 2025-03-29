import { Resolver } from '@nestjs/graphql';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroup } from './domain/attribute-group';

@Resolver(() => AttributeGroup)
export class AttributeGroupResolver {
  constructor(private readonly attributeGroupService: AttributeGroupService) {}
}
