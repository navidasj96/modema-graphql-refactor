import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { CheckSimilarInvoiceWithNameOutput } from '@/modules/invoice/dto/check-similar-invoice-with-name.outpt.dto';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import { InvoicePermissions, UserPermissions } from '@/utils/permissions';

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

  @UseGuards(PermissionsGuard)
  @Permissions([
    InvoicePermissions.PERMISSION_TO_SET_INVOICE_TO_DEPOT_FOR_DIGIKALA,
  ])
  @Query(() => [Invoice])
  async setInvoiceAsDepotForDigikala(
    @Args('ids', { type: () => [String] })
    ids: string[]
  ) {
    const inveoices =
      await this.invoiceService.setInvoiceAsDepotForDigikala(ids);
    return inveoices;
  }
}
