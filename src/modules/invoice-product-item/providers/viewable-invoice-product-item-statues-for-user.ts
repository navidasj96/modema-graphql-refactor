import { AuthService } from '@/modules/auth/auth.service';
import { InvoiceProductStatusService } from '@/modules/invoice-product-status/invoice-product-status.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewableInvoiceProductItemStatusesForUserProvider {
  constructor(
    /**
     * inject authService
     */
    private readonly authService: AuthService,
    /**
     * inject invoiceProductStatusService
     */
    private readonly invoiceProductStatusService: InvoiceProductStatusService
  ) {}

  async viewableInvoiceProductItemStatusesForUser(
    userId: number,
    isShaggy?: boolean
  ) {
    const { permissions: userPermission, roles } =
      await this.authService.getUserPermissions(userId);

    const invoiceProductStatus = await this.invoiceProductStatusService.findAll(
      {}
    );
    const statusToView: number[] = [];

    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_BEGIN_PRODUCTION
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.BEGIN_PRODUCTION);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRINT_AND_HEAT
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRINT);
      statusToView.push(InvoiceProductStatusEnum.HEAT);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRINT_QUALITY_CONTROL
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRINT_QUALITY_CONTROL);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_CUTTING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.CUTTING);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_EDGE_OVERCASTING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.EDGE_OVERCASTING);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_SHAGGY_BORDER_TAPING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.SHAGGY_BORDER_TAPING);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_APPLY_PVC_LABEL
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.APPLY_PVC_LABEL);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_PRODUCTION_COMPLETED
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRODUCTION_COMPLETED);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_RECEIVED_BY_REPOSITORY
      )
    ) {
      statusToView.push(
        InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT
      );
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_EXITED_FROM_REPOSITORY
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.EXITED_FROM_REPOSITORY);
    }
    if (
      userPermission.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_VIEW_ITEMS_IN_CANCELED
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.CANCELED);
    }

    if (roles.includes('administrator')) {
      statusToView.push(InvoiceProductStatusEnum.DAMAGED_DURING_PRODUCTION);
    }

    if (invoiceProductStatus) {
      const invoiceProductStatuesMapped = invoiceProductStatus.map((status) =>
        isShaggy ? status.stepShaggy : status.step
      );
      statusToView.filter((status) =>
        invoiceProductStatuesMapped.includes(status)
      );
    }

    return statusToView;
  }
}
