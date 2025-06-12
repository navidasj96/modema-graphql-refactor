import { Resolver } from '@nestjs/graphql';
import { TmpRussiaProductService } from './tmp-russia-product.service';
import { TmpRussiaProduct } from '@/modules/tmp-russia-product/domain/tmp-russia-product';

@Resolver(() => TmpRussiaProduct)
export class TmpRussiaProductResolver {
  constructor(
    private readonly tmpRussiaProductService: TmpRussiaProductService
  ) {}
}
