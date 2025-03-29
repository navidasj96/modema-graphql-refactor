import { Resolver } from '@nestjs/graphql';
import { CustomerVideoProductService } from './customer-video-product.service';
import { CustomerVideoProduct } from './domain/customer-video-product';

@Resolver(() => CustomerVideoProduct)
export class CustomerVideoProductResolver {
  constructor(
    private readonly customerVideoProductService: CustomerVideoProductService,
  ) {}
}
