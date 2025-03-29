import { Resolver } from '@nestjs/graphql';
import { ProductColorSaleService } from './product-color-sale.service';
import { ProductColorSale } from '@/modules/product-color-sale/domain/product-color-sale';

@Resolver(() => ProductColorSale)
export class ProductColorSaleResolver {
  constructor(
    private readonly productColorSaleService: ProductColorSaleService,
  ) {}
}
