import { Resolver } from '@nestjs/graphql';
import { AttributeItemService } from './attribute-item.service';
import { AttributeItem } from './domain/attribute-item';

@Resolver(() => AttributeItem)
export class AttributeItemResolver {
  constructor(private readonly attributeItemService: AttributeItemService) {}
}
