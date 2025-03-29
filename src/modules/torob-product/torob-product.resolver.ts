import { Resolver } from '@nestjs/graphql';
import { TorobProductService } from './torob-product.service';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';

@Resolver(() => TorobProduct)
export class TorobProductResolver {
  constructor(private readonly torobProductService: TorobProductService) {}
}
