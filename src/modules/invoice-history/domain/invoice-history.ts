import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';

@InputType('InvoiceHistoryDomain')
@ObjectType()
export class InvoiceHistory {
  @IDField(() => ID)
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
  shippingRate?: string;

  @Field({ nullable: true })
  shippingRateCod?: string;

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
  isDepot?: boolean;

  @Field()
  forDigikala: boolean;

  @Field()
  isForAdvertisement: boolean;

  @Field()
  hasPriority: boolean;

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
  paymentCreditable?: boolean;

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
  moneyTransferConfirmed?: boolean;

  @Field({ nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field()
  isReversible: boolean;

  @Field({ nullable: true })
  useWallet?: boolean;

  @Field()
  needsReview: boolean;

  @Field({ nullable: true })
  parentInvoiceId?: number;

  @Field({ nullable: true })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => User, { nullable: true })
  editorUser?: User;

  @Field(() => InvoiceAddress, { nullable: true })
  invoiceAddress?: InvoiceAddress;

  @Field(() => Invoice, { nullable: true })
  invoice?: Invoice;

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @Field(() => [InvoiceProductHistory], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistory[];
}
