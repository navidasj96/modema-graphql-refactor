import { Resolver } from '@nestjs/graphql';
import { DesignersProductPriceRangeService } from './designers-product-price-range.service';
import { DesignersProductPriceRange } from './domain/designers-product-price-range';

@Resolver(() => DesignersProductPriceRange)
export class DesignersProductPriceRangeResolver {
  constructor(
    private readonly designersProductPriceRangeService: DesignersProductPriceRangeService
  ) {}
}
