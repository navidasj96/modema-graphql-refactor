import { Resolver } from '@nestjs/graphql';
import { Attribute } from './domain/attribute';

@Resolver(() => Attribute)
export class AttributeResolver {}
