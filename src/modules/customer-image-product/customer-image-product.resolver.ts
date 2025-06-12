import { Resolver } from '@nestjs/graphql';
import { CustomerImageProductService } from './customer-image-product.service';
import { CustomerImageProduct } from './domain/customer-image-product';

@Resolver(() => CustomerImageProduct)
export class CustomerImageProductResolver {
  constructor(
    private readonly customerImageProductService: CustomerImageProductService
  ) {}
}
