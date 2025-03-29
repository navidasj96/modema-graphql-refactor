import { Resolver } from '@nestjs/graphql';
import { AttributeSubproductService } from './attribute-subproduct.service';
import { AttributeSubproduct } from './domain/attribute-subproduct';

@Resolver(() => AttributeSubproduct)
export class AttributeSubproductResolver {
  constructor(
    private readonly attributeSubproductService: AttributeSubproductService,
  ) {}
}
