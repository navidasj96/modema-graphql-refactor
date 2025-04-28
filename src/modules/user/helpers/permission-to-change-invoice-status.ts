import { InvoiceStatusEnum } from '@/utils/invoice-status';
import { InvoicePermissions } from '@/utils/permissions';

export const permissionsToChangeInvoiceStatusEnum = (
  userPermissions: string[]
) => {
  const statusesToChange: number[] = [];

  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_STATUS_IN_AWAITING
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.AWAITING_PROCESS);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_REFERRED_TO_PRODUCTION
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT);
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_CHECKED)
  ) {
    statusesToChange.push(InvoiceStatusEnum.CHECKED_BY_SALES_DEPARTMENT);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_PREPARING
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.PREPARING_PRODUCTS);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_PRODUCTION_COMPLETED
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.PRODUCTION_COMPLETED);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_RECEIVED_BY_PACKAGING
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_READY_TO_SEND
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.READY_TO_SEND_CHAPAR);
    statusesToChange.push(InvoiceStatusEnum.READY_TO_SEND_MAHEX);
    statusesToChange.push(InvoiceStatusEnum.READY_TO_SEND_TIPAX);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_READY_TO_SEND_NON_CHAPAR
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS);
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_SENT)
  ) {
    statusesToChange.push(InvoiceStatusEnum.SENT);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_DELIVERED
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.DELIVERED);
  }
  if (
    userPermissions.includes(InvoicePermissions.PERMISSION_TO_CHANGE_TO_CANCEL)
  ) {
    statusesToChange.push(InvoiceStatusEnum.CANCEL);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_RETURN_TO_ORIGIN
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.RETURN_TO_ORIGIN);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_TO_ADDED_TO_DEPOT
    )
  ) {
    statusesToChange.push(InvoiceStatusEnum.ADDED_TO_DEPOT_INVENTORY);
  }
  if (
    userPermissions.includes(
      InvoicePermissions.PERMISSION_TO_CHANGE_INVOICES_TO_CANCELED_SNAPP_AFTER_RECEIVED
    )
  ) {
    statusesToChange.push(
      InvoiceStatusEnum.CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER
    );
  }

  return statusesToChange;
};
