import { UserContext } from '@/modules/auth/interfaces/UserContext';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ChangeInvoicesStatusResponseDto } from '@/modules/invoice/dto/change-invoices-status-response.dto';
import { ChangeInvoicesStatusInput } from '@/modules/invoice/dto/change-invoices-status.input';
import { CheckSimilarInvoiceWithNameInput } from '@/modules/invoice/dto/check-similar-invoice-with-name.input.dto';
import { CheckSimilarInvoiceWithNameOutput } from '@/modules/invoice/dto/check-similar-invoice-with-name.outpt.dto';
import { ReportPadsToProduceInput } from '@/modules/invoice/dto/report-pads-to-produce.input';
import { ReportPadsToProduceOutput } from '@/modules/invoice/dto/report-pads-to-produce.output';
import { ReportSentInvoicesInput } from '@/modules/invoice/dto/report-sent-invoices.input';
import { ReportSentInvoicesOutput } from '@/modules/invoice/dto/report-sent-invoices.output';
import { SetInvoiceAsDepotForDigikalaResponseDto } from '@/modules/invoice/dto/set-invoice-as-depot-for-digikala-response.dto';
import { ShowInvoiceInputDto } from '@/modules/invoice/dto/show-invoice.input.dto';
import { SubproductsDepotInProgressInput } from '@/modules/invoice/dto/subproducts-depot-in-progress.input';
import { SubproductsDepotInProgressOutput } from '@/modules/invoice/dto/subproducts-depot-in-progress.output';
import { PermissionsGuard } from '@/utils/permission-guard/permission.guard';
import { Permissions } from '@/utils/permission-guard/permissions.decorator';
import {
  InvoicePermissions,
  PERMISSION_TO_VIEW_REPORT_SENT_INVOICES,
  ProductionPadPermissions,
} from '@/utils/permissions';
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';

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
  @Mutation(() => SetInvoiceAsDepotForDigikalaResponseDto)
  async setInvoiceAsDepotForDigikala(
    @Args('ids', { type: () => [String] })
    ids: string[]
  ) {
    return await this.invoiceService.setInvoiceAsDepotForDigikala(ids);
  }

  @Mutation(() => ChangeInvoicesStatusResponseDto)
  async changeInvoicesStatus(
    @Args('ChangeInvoicesStatusInput', {
      type: () => ChangeInvoicesStatusInput,
    })
    changeInvoicesStatusInput: ChangeInvoicesStatusInput,
    @Context() context: { req: UserContext }
  ) {
    return this.invoiceService.changeInvoiceStatus(
      changeInvoicesStatusInput,
      context
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([InvoicePermissions.PERMISSION_TO_VIEW_INVOICE_DETAILS])
  @Query(() => Invoice)
  async showInvoice(
    @Args('showInvoice', { type: () => ShowInvoiceInputDto })
    showInvoiceInputDto: ShowInvoiceInputDto,
    @Context()
    context: {
      req: UserContext;
    }
  ) {
    return await this.invoiceService.showInvoice(showInvoiceInputDto, context);
  }

  @Query(() => SubproductsDepotInProgressOutput)
  async subproductsDepotInProgress(
    @Args('subproductsDepotInProgress', {
      type: () => SubproductsDepotInProgressInput,
    })
    subproductsDepotInProgressInput: SubproductsDepotInProgressInput
  ) {
    return await this.invoiceService.subproductsDepotInProgress(
      subproductsDepotInProgressInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([ProductionPadPermissions.PERMISSION_TO_VIEW])
  @Query(() => [ReportPadsToProduceOutput])
  async reportPadsToProduceList(
    @Args('reportPadsToProduceInput', { type: () => ReportPadsToProduceInput })
    reportPadsToProduceInput: ReportPadsToProduceInput
  ) {
    return await this.invoiceService.reportPadsToProduceList(
      reportPadsToProduceInput
    );
  }

  @UseGuards(PermissionsGuard)
  @Permissions([PERMISSION_TO_VIEW_REPORT_SENT_INVOICES])
  @Query(() => ReportSentInvoicesOutput)
  async reportSentInvoicesList(
    @Args('reportSentInvoicesInput', { type: () => ReportSentInvoicesInput })
    reportSentInvoicesInput: ReportSentInvoicesInput
  ) {
    return await this.invoiceService.reportSentInvoicesList(
      reportSentInvoicesInput
    );
  }
}
