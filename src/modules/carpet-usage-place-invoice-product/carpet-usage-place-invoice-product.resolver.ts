import { Resolver } from '@nestjs/graphql';
import { CarpetUsagePlaceInvoiceProductService } from './carpet-usage-place-invoice-product.service';
import { CarpetUsagePlaceInvoiceProduct } from './domain/carpet-usage-place-invoice-product';

@Resolver(() => CarpetUsagePlaceInvoiceProduct)
export class CarpetUsagePlaceInvoiceProductResolver {
  constructor(
    private readonly carpetUsagePlaceInvoiceProductService: CarpetUsagePlaceInvoiceProductService
  ) {}
}
