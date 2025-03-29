import { Resolver } from '@nestjs/graphql';
import { InvoiceModeService } from './invoice-mode.service';
import { InvoiceMode } from '@/modules/invoice-mode/domain/invoice-mode';

@Resolver(() => InvoiceMode)
export class InvoiceModeResolver {
  constructor(private readonly invoiceModeService: InvoiceModeService) {}
}
