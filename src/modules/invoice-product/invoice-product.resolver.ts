import { Resolver } from '@nestjs/graphql';
import { InvoiceProductService } from './invoice-product.service';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';

@Resolver(() => InvoiceProduct)
export class InvoiceProductResolver {
  constructor(private readonly invoiceProductService: InvoiceProductService) {}
}
