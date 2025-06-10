import { InvoiceProductStatusService } from '@/modules/invoice-product-status/invoice-product-status.service';
import { InvoiceProductStatusEnum } from '@/utils/invoice-product-status';
import { InvoiceProductItemPermissions } from '@/utils/permissions';
import { Injectable } from '@nestjs/common';
import { IsNull, Not } from 'typeorm';

@Injectable()
export class PermissionsToChangeInvoiceProductItemStatusProvider {
  constructor(
    /**
     * inject invoiceProductStatusService
     */
    private readonly invoiceProductStatusService: InvoiceProductStatusService
  ) {}

  async PermissionsToChangeInvoiceProductItemStatus(
    permissions: string[],
    isShaggy = false
  ) {
    let statusToView: number[] = [];
    const invoiceProductStatues =
      await this.invoiceProductStatusService.findAll({
        where: { step: Not(IsNull()) },
      });
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_BEGIN_PRODUCTION
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.BEGIN_PRODUCTION);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_AND_HEAT
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRINT);
      statusToView.push(InvoiceProductStatusEnum.HEAT);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRINT_QUALITY_CONTROL
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRINT_QUALITY_CONTROL);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_CUTTING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.CUTTING);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_EDGE_OVERCASTING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.EDGE_OVERCASTING);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_SHAGGY_BORDER_TAPING
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.SHAGGY_BORDER_TAPING);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_APPLY_PVC_LABEL
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.APPLY_PVC_LABEL);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_PRODUCTION_COMPLETED
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.PRODUCTION_COMPLETED);
    }
    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_RECEIVED_BY_REPOSITORY
      )
    ) {
      statusToView.push(
        InvoiceProductStatusEnum.RECEIVED_BY_REPOSITORY_DEPARTMENT
      );
    }

    if (
      permissions.includes(
        InvoiceProductItemPermissions.PERMISSION_TO_CHANGE_ITEMS_TO_CANCELED
      )
    ) {
      statusToView.push(InvoiceProductStatusEnum.CANCELED);
    }

    if (invoiceProductStatues) {
      const invoiceProductStatuesMapped = invoiceProductStatues.map((status) =>
        isShaggy ? status.stepShaggy : status.step
      );
      statusToView.filter((status) =>
        invoiceProductStatuesMapped.includes(status)
      );
    }

    return statusToView;
  }
}
