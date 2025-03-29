import { Resolver } from '@nestjs/graphql';
import { TempSubproductDiscountService } from './temp-subproduct-discount.service';
import { TempSubproductDiscount } from '@/modules/temp-subproduct-discount/domain/temp-subproduct-discount';

@Resolver(() => TempSubproductDiscount)
export class TempSubproductDiscountResolver {
  constructor(
    private readonly tempSubproductDiscountService: TempSubproductDiscountService,
  ) {}
}
