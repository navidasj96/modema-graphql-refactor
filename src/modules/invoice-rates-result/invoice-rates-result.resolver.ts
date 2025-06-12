import { Resolver } from '@nestjs/graphql';
import { InvoiceRatesResultService } from './invoice-rates-result.service';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/domain/invoice-rates-result';

@Resolver(() => InvoiceRatesResult)
export class InvoiceRatesResultResolver {
  constructor(
    private readonly invoiceRatesResultService: InvoiceRatesResultService
  ) {}
}
