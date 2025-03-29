import { Resolver } from '@nestjs/graphql';
import { OutOfStockButListedProductService } from './out-of-stock-but-listed-product.service';
import { OutOfStockButListedProduct } from '@/modules/out-of-stock-but-listed-product/domain/out-of-stock-but-listed-product';

@Resolver(() => OutOfStockButListedProduct)
export class OutOfStockButListedProductResolver {
  constructor(
    private readonly outOfStockButListedProductService: OutOfStockButListedProductService,
  ) {}
}
