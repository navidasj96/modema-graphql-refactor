import { InvoicePermissions } from '@/utils/permissions';

export const permissionToViewInvoice = (userPermission: string[]) => {
  let statusToView: string[] = [];
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_AWAITING,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_AWAITING,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CHECKED,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CHECKED,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_REFERRED_TO_PRODUCTION,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_REFERRED_TO_PRODUCTION,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PREPARING,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PREPARING,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PRODUCTION_COMPLETED,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_PRODUCTION_COMPLETED,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RECEIVED_BY_PACKAGING,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RECEIVED_BY_PACKAGING,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND_NON_CHAPAR,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_READY_TO_SEND_NON_CHAPAR,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_SENT,
    )
  ) {
    statusToView.push(InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_SENT);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_DELIVERED,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_DELIVERED,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCEL,
    )
  ) {
    statusToView.push(InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCEL);
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RETURN_TO_ORIGIN,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_RETURN_TO_ORIGIN,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_ADDED_TO_DEPOT,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_ADDED_TO_DEPOT,
    );
  }
  if (
    userPermission.includes(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCELED_SNAPP_AFTER_RECEIVED,
    )
  ) {
    statusToView.push(
      InvoicePermissions.PERMISSION_TO_VIEW_INVOICES_IN_CANCELED_SNAPP_AFTER_RECEIVED,
    );
  }
  return statusToView;
};
