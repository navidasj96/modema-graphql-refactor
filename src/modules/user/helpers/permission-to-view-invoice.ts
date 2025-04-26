import { InvoiceStatus } from '@/utils/invoice-status';
import { InvoicePermissions } from '@/utils/permissions';

export const permissionToViewInvoice = (userPermission: string[]) => {
  let statusToView: number[] = [];
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_AWAITING
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_AWAITING_PROCESS);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CHECKED
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_CHECKED_BY_SALES_DEPARTMENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_REFERRED_TO_PRODUCTION
    )
  ) {
    statusToView.push(
      InvoiceStatus.INVOICE_STATUS_REFERRED_TO_PRODUCTION_DEPARTMENT
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PREPARING
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_PREPARING_PRODUCTS);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PRODUCTION_COMPLETED
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_PRODUCTION_COMPLETED);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RECEIVED_BY_PACKAGING
    )
  ) {
    statusToView.push(
      InvoiceStatus.INVOICE_STATUS_RECEIVED_BY_PACKAGING_DEPARTMENT
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_CHAPAR);
    statusToView.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_MAHEX);
    statusToView.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_TIPAX);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND_NON_CHAPAR
    )
  ) {
    statusToView.push(
      InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_GENERAL_EXPRESS
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_SENT
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_SENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_DELIVERED
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_DELIVERED);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCEL
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_CANCEL);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RETURN_TO_ORIGIN
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_RETURN_TO_ORIGIN);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_ADDED_TO_DEPOT
    )
  ) {
    statusToView.push(InvoiceStatus.INVOICE_STATUS_ADDED_TO_DEPOT_INVENTORY);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCELED_SNAPP_AFTER_RECEIVED
    )
  ) {
    statusToView.push(
      InvoiceStatus.INVOICE_STATUS_CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER
    );
  }
  return statusToView;
};
