import { Resolver } from '@nestjs/graphql';
import { InvoiceAddressValidationResultService } from './invoice-address-validation-result.service';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result';

@Resolver(() => InvoiceAddressValidationResult)
export class InvoiceAddressValidationResultResolver {
  constructor(
    private readonly invoiceAddressValidationResultService: InvoiceAddressValidationResultService,
  ) {}
}
