import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { CheckSimilarInvoiceWithNameOutput } from '@/modules/invoice/dto/check-similar-invoice-with-name.outpt.dto';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(
    /**
     * inject invoiceService
     */
    private readonly invoiceService: InvoiceService
  ) {}

  @Query(() => [CheckSimilarInvoiceWithNameOutput])
  async invoiceSimilarNameCheck(
    @Args('usersInfo', { type: () => [CheckSimilarInvoiceWithNameInput] })
    usersInfo: CheckSimilarInvoiceWithNameInput[]
  ) {
    return await this.invoiceService.checkSimilarInvoiceWithName(usersInfo);
  }
}
