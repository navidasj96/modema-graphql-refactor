import { Resolver } from '@nestjs/graphql';
import { InvoiceProductItemInvoiceProductStatusService } from './invoice-product-item-invoice-product-status.service';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';

@Resolver(() => InvoiceProductItemInvoiceProductStatus)
export class InvoiceProductItemInvoiceProductStatusResolver {
  constructor(
    private readonly invoiceProductItemInvoiceProductStatusService: InvoiceProductItemInvoiceProductStatusService,
  ) {}
}
