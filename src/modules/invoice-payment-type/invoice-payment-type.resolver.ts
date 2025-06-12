import { Resolver } from '@nestjs/graphql';
import { InvoicePaymentTypeService } from './invoice-payment-type.service';
import { InvoicePaymentType } from '@/modules/invoice-payment-type/domain/invoice-payment-type';

@Resolver(() => InvoicePaymentType)
export class InvoicePaymentTypeResolver {
  constructor(
    private readonly invoicePaymentTypeService: InvoicePaymentTypeService
  ) {}
}
