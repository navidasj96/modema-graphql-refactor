import { Resolver } from '@nestjs/graphql';
import { InvoiceShippingRateService } from './invoice-shipping-rate.service';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate';

@Resolver(() => InvoiceShippingRate)
export class InvoiceShippingRateResolver {
  constructor(
    private readonly invoiceShippingRateService: InvoiceShippingRateService
  ) {}
}
