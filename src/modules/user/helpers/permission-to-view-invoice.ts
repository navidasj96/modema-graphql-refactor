import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { InvoicePermissions } from '@/utils/permissions';

export const permissionToViewInvoice = (userPermission: string[]) => {
  let statusToView: number[] = [];
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_AWAITING
    )
  ) {
    statusToView.push(InvoiceStatusEnum.AWAITING_PROCESS);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CHECKED
    )
  ) {
    statusToView.push(InvoiceStatusEnum.CHECKED_BY_SALES_DEPARTMENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_REFERRED_TO_PRODUCTION
    )
  ) {
    statusToView.push(InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PREPARING
    )
  ) {
    statusToView.push(InvoiceStatusEnum.PREPARING_PRODUCTS);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PRODUCTION_COMPLETED
    )
  ) {
    statusToView.push(InvoiceStatusEnum.PRODUCTION_COMPLETED);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RECEIVED_BY_PACKAGING
    )
  ) {
    statusToView.push(InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND
    )
  ) {
    statusToView.push(InvoiceStatusEnum.READY_TO_SEND_CHAPAR);
    statusToView.push(InvoiceStatusEnum.READY_TO_SEND_MAHEX);
    statusToView.push(InvoiceStatusEnum.READY_TO_SEND_TIPAX);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND_NON_CHAPAR
    )
  ) {
    statusToView.push(InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_SENT
    )
  ) {
    statusToView.push(InvoiceStatusEnum.SENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_DELIVERED
    )
  ) {
    statusToView.push(InvoiceStatusEnum.DELIVERED);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCEL
    )
  ) {
    statusToView.push(InvoiceStatusEnum.CANCEL);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RETURN_TO_ORIGIN
    )
  ) {
    statusToView.push(InvoiceStatusEnum.RETURN_TO_ORIGIN);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_ADDED_TO_DEPOT
    )
  ) {
    statusToView.push(InvoiceStatusEnum.ADDED_TO_DEPOT_INVENTORY);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCELED_SNAPP_AFTER_RECEIVED
    )
  ) {
    statusToView.push(
      InvoiceStatusEnum.CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER
    );
  }
  return statusToView;
};
