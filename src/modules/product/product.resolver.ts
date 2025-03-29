import { Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from '@/modules/product/domain/product';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
}
