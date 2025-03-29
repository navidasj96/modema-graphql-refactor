import { Resolver } from '@nestjs/graphql';
import { LabelProductService } from './label-product.service';
import { LabelProduct } from '@/modules/label-product/domain/label-product';

@Resolver(() => LabelProduct)
export class LabelProductResolver {
  constructor(private readonly labelProductService: LabelProductService) {}
}
