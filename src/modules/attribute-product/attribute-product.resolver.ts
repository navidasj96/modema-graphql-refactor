import { Resolver } from '@nestjs/graphql';
import { AttributeProductService } from './attribute-product.service';
import { AttributeProduct } from './domain/attribute-product';

@Resolver(() => AttributeProduct)
export class AttributeProductResolver {
  constructor(
    private readonly attributeProductService: AttributeProductService
  ) {}
}
