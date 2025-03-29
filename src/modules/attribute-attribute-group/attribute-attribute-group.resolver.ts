import { Resolver } from '@nestjs/graphql';
import { AttributeAttributeGroup } from './domain/attribute-attribute-group';

@Resolver(() => AttributeAttributeGroup)
export class AttributeAttributeGroupResolver {}
