import { Resolver } from '@nestjs/graphql';
import { InvoiceProductStatusService } from './invoice-product-status.service';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/domain/invoice-product-status';

@Resolver(() => InvoiceProductStatus)
export class InvoiceProductStatusResolver {
  constructor(
    private readonly invoiceProductStatusService: InvoiceProductStatusService
  ) {}
}
