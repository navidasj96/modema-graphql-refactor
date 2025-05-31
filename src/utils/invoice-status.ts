export enum InvoiceStatusEnum {
  INITIATED = 1 as number,
  ADDRESS_VALIDATED = 2 as number,
  SHIPPING_SELECTED = 3 as number,
  PRICE_FINALIZED = 4 as number,
  PAYMENT_PENDING = 5 as number,

  AWAITING_PROCESS = 7 as number,
  CHECKED_BY_SALES_DEPARTMENT = 9 as number,
  REFERRED_TO_PRODUCTION_DEPARTMENT = 11 as number,
  PREPARING_PRODUCTS = 13 as number,
  PRODUCTION_COMPLETED = 15 as number,
  RECEIVED_BY_PACKAGING_DEPARTMENT = 17 as number,
  READY_TO_SEND_CHAPAR = 19 as number,
  READY_TO_SEND_MAHEX = 20 as number,
  READY_TO_SEND_GENERAL_EXPRESS = 21 as number,
  READY_TO_SEND_TIPAX = 22 as number,
  SENT = 23 as number,
  DELIVERED = 25 as number,
  CANCEL = 27 as number,
  RETURN_TO_ORIGIN = 29 as number,
  ADDED_TO_DEPOT_INVENTORY = 31 as number,
  DAMAGED_DURING_PRODUCTION = 33 as number,
  CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER = 35 as number,
}

export const NOT_SENT_INVOICE_STATUSES: InvoiceStatusEnum[] = [
  InvoiceStatusEnum.AWAITING_PROCESS,
  InvoiceStatusEnum.CHECKED_BY_SALES_DEPARTMENT,
  InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT,
  InvoiceStatusEnum.PREPARING_PRODUCTS,
  InvoiceStatusEnum.PRODUCTION_COMPLETED,
  InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT,
  InvoiceStatusEnum.READY_TO_SEND_CHAPAR,
  InvoiceStatusEnum.READY_TO_SEND_MAHEX,
  InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS,
  InvoiceStatusEnum.READY_TO_SEND_TIPAX,
];

export const READY_TO_SEND_INVOICE_STATUSES: InvoiceStatusEnum[] = [
  InvoiceStatusEnum.READY_TO_SEND_CHAPAR,
  InvoiceStatusEnum.READY_TO_SEND_MAHEX,
  InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS,
  InvoiceStatusEnum.READY_TO_SEND_TIPAX,
];

export const PRODUCTION_IN_PROGRESS_INVOICE_STATUSES: InvoiceStatusEnum[] = [
  InvoiceStatusEnum.REFERRED_TO_PRODUCTION_DEPARTMENT,
  InvoiceStatusEnum.PREPARING_PRODUCTS,
  InvoiceStatusEnum.PRODUCTION_COMPLETED,
  InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT,
];

export const INVOICE_STATUSES_PACKAGING_AND_AFTER_STATUSES: InvoiceStatusEnum[] =
  [
    InvoiceStatusEnum.RECEIVED_BY_PACKAGING_DEPARTMENT,
    InvoiceStatusEnum.READY_TO_SEND_CHAPAR,
    InvoiceStatusEnum.READY_TO_SEND_MAHEX,
    InvoiceStatusEnum.READY_TO_SEND_GENERAL_EXPRESS,
    InvoiceStatusEnum.READY_TO_SEND_TIPAX,
    InvoiceStatusEnum.SENT,
    InvoiceStatusEnum.CANCEL,
    InvoiceStatusEnum.RETURN_TO_ORIGIN,
    InvoiceStatusEnum.ADDED_TO_DEPOT_INVENTORY,
    InvoiceStatusEnum.DAMAGED_DURING_PRODUCTION,
    InvoiceStatusEnum.CANCELED_SNAPP_AFTER_RECEIVED_BY_CUSTOMER,
  ];
