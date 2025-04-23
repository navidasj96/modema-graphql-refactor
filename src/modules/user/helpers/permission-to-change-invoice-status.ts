import { InvoicePermissions } from '@/utils/permissions';
import { InvoiceStatus } from '@/utils/invoice-status';

export const permissionsToChangeInvoiceStatus = (userPermissions: string[]) => {
  const statusesToChange: number[] = [];

  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_STATUS_IN_AWAITING,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_AWAITING_PROCESS);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_REFERRED_TO_PRODUCTION,
    )
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_REFERRED_TO_PRODUCTION_DEPARTMENT,
    );
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_CHECKED)
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_CHECKED_BY_SALES_DEPARTMENT,
    );
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_PREPARING,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_PREPARING_PRODUCTS);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_PRODUCTION_COMPLETED,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_PRODUCTION_COMPLETED);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_RECEIVED_BY_PACKAGING,
    )
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_RECEIVED_BY_PACKAGING_DEPARTMENT,
    );
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_READY_TO_SEND,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_CHAPAR);
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_MAHEX);
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_TIPAX);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_READY_TO_SEND_NON_CHAPAR,
    )
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_READY_TO_SEND_GENERAL_EXPRESS,
    );
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_SENT)
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_SENT);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_DELIVERED,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_DELIVERED);
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_CANCEL)
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_CANCEL);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_RETURN_TO_ORIGIN,
    )
  ) {
    statusesToChange.push(InvoiceStatus.INVOICE_STATUS_RETURN_TO_ORIGIN);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_ADDED_TO_DEPOT,
    )
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_ADDED_TO_DEPOT_INVENTORY,
    );
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_INVOICES_TO_CANCELED_SNAPP_AFTER_RECEIVED,
    )
  ) {
    statusesToChange.push(
      InvoiceStatus.INVOICE_STATUS_CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER,
    );
  }

  return statusesToChange;
};
