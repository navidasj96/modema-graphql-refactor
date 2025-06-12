import { Resolver } from '@nestjs/graphql';
import { InvoiceNegotiationService } from './invoice-negotiation.service';
import { InvoiceNegotiation } from '@/modules/invoice-negotiation/domain/invoice-negotiation';

@Resolver(() => InvoiceNegotiation)
export class InvoiceNegotiationResolver {
  constructor(
    private readonly invoiceNegotiationService: InvoiceNegotiationService
  ) {}
}
