import { Resolver } from '@nestjs/graphql';
import { DiscountService } from './discount.service';
import { Discount } from './domain/discount';

@Resolver(() => Discount)
export class DiscountResolver {
  constructor(private readonly discountService: DiscountService) {}
}
