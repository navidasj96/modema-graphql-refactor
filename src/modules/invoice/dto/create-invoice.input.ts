import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInput {
  @Field()
  id: number;

  @Field()
  currentInvoiceStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  invoiceNumber?: string;

  @Field({ nullable: true })
  refId?: string;

  @Field({ nullable: true })
  saleRefId?: string;

  @Field({ nullable: true })
  orderId?: string;

  @Field({ nullable: true })
  taxRate?: number;

  @Field({ nullable: true })
  selectedShippingServiceId?: number;

  @Field({ nullable: true })
  shippingRate?: string;

  @Field({ nullable: true })
  shippingRateCod?: string;

  @Field()
  paidCodShippingRate: number;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field()
  issueDate: Date;

  @Field({ nullable: true })
  visitorCouponId?: number;

  @Field({ nullable: true })
  visitorId?: number;

  @Field({ nullable: true })
  visitorGroupId?: number;

  @Field({ nullable: true })
  visitorCouponRate?: number;

  @Field({ nullable: true })
  visitorRate?: number;

  @Field()
  partnerCode: string;

  @Field({ nullable: true })
  totalVisitorShare?: number;

  @Field({ nullable: true })
  subtotalPrice?: string;

  @Field({ nullable: true })
  totalDiscount?: string;

  @Field({ nullable: true })
  totalCouponDiscount?: string;

  @Field({ nullable: true })
  totalTax?: string;

  @Field({ nullable: true })
  totalWalletCharged?: string;

  @Field({ nullable: true })
  totalPrice?: string;

  @Field()
  additions: string;

  @Field()
  cashOnDelivery: boolean;

  @Field({ nullable: true })
  paymentErrorMessage?: string;

  @Field({ nullable: true })
  invoicePaymentStatusId?: number;

  @Field()
  freeDelivery: boolean;

  @Field({ nullable: true })
  trackingCode?: string;

  @Field({ nullable: true })
  deliveredDate?: Date;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field({ nullable: true })
  packageCount?: number;

  @Field()
  visitorShareCalculated: boolean;

  @Field()
  isChaparDelivery: boolean;

  @Field({ nullable: true })
  chaparStatus?: string;

  @Field({ nullable: true })
  chaparSettlementStatusId?: number;

  @Field({ nullable: true })
  crmPreOrderId?: string;

  @Field({ nullable: true })
  crmCompanyId?: string;

  @Field({ nullable: true })
  crmCompanyPersonId?: string;

  @Field()
  isDepot: boolean;

  @Field()
  forDigikala: boolean;

  @Field()
  isForAdvertisement: boolean;

  @Field()
  hasPriority: boolean;

  @Field()
  replacementAdditionalPrice: string;

  @Field({ nullable: true })
  replacementPaymentStatusId?: number;

  @Field({ nullable: true })
  replacementPriceMoneyTransferCode?: string;

  @Field({ nullable: true })
  digikalaSharePercent?: number;

  @Field({ nullable: true })
  digikalaShare?: number;

  @Field({ nullable: true })
  invoiceModeId?: number;

  @Field({ nullable: true })
  invoiceTypeId?: number;

  @Field()
  paymentCreditable: boolean;

  @Field({ nullable: true })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Field({ nullable: true })
  parentInvoiceId?: number;

  @Field({ nullable: true })
  lockState?: number;

  @Field({ nullable: true })
  lockStateDescription?: string;

  @Field({ nullable: true })
  moneyTransferConfirmed?: boolean;

  @Field({ nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field()
  isReversible: boolean;

  @Field()
  useWallet: boolean;

  @Field()
  needsReview: boolean;

  @Field()
  containsPadsOnly: boolean;

  @Field({ nullable: true })
  deadlineDate?: string;

  @Field({ nullable: true })
  deadlineDateOld?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  accountingDescription?: string;

  @Field()
  addressId: number;

  @Field({ nullable: true })
  shipmentUuid?: string;

  @Field({ nullable: true })
  totalPriceOld?: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  sepidarCode?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  seenAt?: Date;

  @Field()
  canReturn: boolean;

  @Field({ nullable: true })
  sal?: number;

  @Field({ nullable: true })
  mah?: number;

  @Field({ nullable: true })
  roz?: number;
}
