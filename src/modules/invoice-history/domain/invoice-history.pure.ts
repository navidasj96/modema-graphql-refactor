import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { InvoicePaymentHistoryPure } from '@/modules/invoice-payment-history/domain/invoice-payment-history.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('InvoiceHistoryPureDomain')
@ObjectType()
export class InvoiceHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  editorUserId: number;

  @Field()
  invoiceId: number;

  @Field()
  currentInvoiceStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field()
  addressId: number;

  @Field({ nullable: true })
  totalPriceOld?: number;

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
  shippingRate?: number;

  @Field({ nullable: true })
  shippingRateCod?: number;

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

  @Field({ nullable: true })
  partnerCode?: string;

  @Field({ nullable: true })
  totalVisitorShare?: number;

  @Field({ nullable: true })
  subtotalPrice?: number;

  @Field({ nullable: true })
  totalDiscount?: number;

  @Field({ nullable: true })
  totalCouponDiscount?: number;

  @Field({ nullable: true })
  totalTax?: number;

  @Field({ nullable: true })
  totalWalletCharged?: number;

  @Field({ nullable: true })
  totalPrice?: number;

  @Field()
  additions: string;

  @Field()
  cashOnDelivery: number;

  @Field({ nullable: true })
  paymentErrorMessage?: string;

  @Field({ nullable: true })
  invoicePaymentStatusId?: number;

  @Field()
  freeDelivery: number;

  @Field({ nullable: true })
  trackingCode?: string;

  @Field({ nullable: true })
  deliveredDate?: Date;

  @Field({ nullable: true })
  moneyTransferRefCode?: string;

  @Field({ nullable: true })
  packageCount?: number;

  @Field()
  visitorShareCalculated: number;

  @Field()
  isChaparDelivery: number;

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

  @Field({ nullable: true })
  isDepot?: number;

  @Field()
  forDigikala: number;

  @Field()
  isForAdvertisement: number;

  @Field()
  hasPriority: number;

  @Field({ nullable: true })
  replacementAdditionalPrice?: string;

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

  @Field({ nullable: true })
  paymentCreditable?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  accountingDescription?: string;

  @Field()
  invoiceAddressId: number;

  @Field()
  countryId: number;

  @Field()
  stateId: number;

  @Field()
  cityId: number;

  @Field({ nullable: true })
  fullname?: string;

  @Field({ nullable: true })
  zipCode?: string;

  @Field()
  address: string;

  @Field({ nullable: true })
  address2?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  phone2?: string;

  @Field({ nullable: true })
  longitude?: string;

  @Field({ nullable: true })
  latitude?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  fullAddress?: string;

  @Field({ nullable: true })
  lockState?: number;

  @Field({ nullable: true })
  moneyTransferConfirmed?: number;

  @Field({ nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field()
  isReversible: number;

  @Field({ nullable: true })
  useWallet?: number;

  @Field()
  needsReview: number;

  @Field({ nullable: true })
  parentInvoiceId?: number;

  @Field({ nullable: true })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure, { nullable: true })
  editorUser?: UserPure;

  @Field(() => InvoiceAddressPure, { nullable: true })
  invoiceAddress?: InvoiceAddressPure;

  @Field(() => InvoicePure, { nullable: true })
  invoice?: InvoicePure;

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistoryPure[];

  @Field(() => [InvoiceProductHistoryPure], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistoryPure[];
}
