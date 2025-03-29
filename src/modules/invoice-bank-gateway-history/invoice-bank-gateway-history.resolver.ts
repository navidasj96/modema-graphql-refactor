import { Resolver } from '@nestjs/graphql';
import { InvoiceBankGatewayHistoryService } from './invoice-bank-gateway-history.service';
import { InvoiceBankGatewayHistory } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history';

@Resolver(() => InvoiceBankGatewayHistory)
export class InvoiceBankGatewayHistoryResolver {
  constructor(
    private readonly invoiceBankGatewayHistoryService: InvoiceBankGatewayHistoryService,
  ) {}
}
