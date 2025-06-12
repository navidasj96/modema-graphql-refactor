import { Resolver } from '@nestjs/graphql';
import { ReturnedInvoiceProductService } from './returned-invoice-product.service';
import { ReturnedInvoiceProduct } from '@/modules/returned-invoice-product/domain/returned-invoice-product';

@Resolver(() => ReturnedInvoiceProduct)
export class ReturnedInvoiceProductResolver {
  constructor(
    private readonly returnedInvoiceProductService: ReturnedInvoiceProductService
  ) {}
}
