import { Context, Query, Resolver } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { UserContext } from '@/modules/auth/interfaces/UserContext';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(
    /**
     * inject invoiceService
     */
    private readonly invoiceService: InvoiceService,
  ) {}

  @Query(() => Invoice)
  async invoiceList(@Context() context: { req: UserContext }) {
    return await this.invoiceService.invoiceList(context);
  }
}
