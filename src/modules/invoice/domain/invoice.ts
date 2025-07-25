import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { ChaparTrackingHistory } from '@/modules/chapar-tracking-history/domain/chapar-tracking-history';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { InvoiceBankGatewayHistory } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';
import { InvoiceNegotiation } from '@/modules/invoice-negotiation/domain/invoice-negotiation';
import { InvoicePayment } from '@/modules/invoice-payment/domain/invoice-payment';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/domain/invoice-rates-result';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate';
import { Address } from '@/modules/address/domain/address';
import { ChaparSettlementStatus } from '@/modules/chapar-settlement-status/domain/chapar-settlement-status';
import { InvoiceStatus } from '@/modules/invoice-status/domain/invoice-status';
import { InvoiceMode } from '@/modules/invoice-mode/domain/invoice-mode';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/domain/invoice-payment-status';
import { InvoiceType } from '@/modules/invoice-type/domain/invoice-type';
import { User } from '@/modules/user/domain/user';
import { VisitorCoupon } from '@/modules/visitor-coupon/domain/visitor-coupon';
import { VisitorGroup } from '@/modules/visitor-group/domain/visitor-group';
import { Visitor } from '@/modules/visitor/domain/visitor';
import { PaymentMethodField } from '@/modules/payment-method-field/domain/payment-method-field';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/domain/invoice-product-history';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';
import { ShippingService } from '@/modules/shipping-service/domain/shipping-service';

@InputType('InvoiceDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  filterDepth: 4,
})
@FilterableRelation('currentInvoiceStatus', () => InvoiceStatus, {
  nullable: true,
})
@FilterableRelation('invoicePaymentStatus', () => InvoicePaymentStatus, {
  nullable: true,
})
@FilterableUnPagedRelation('invoiceNegotiations', () => InvoiceNegotiation)
@FilterableUnPagedRelation('invoiceHistories', () => InvoiceHistory)
@FilterableUnPagedRelation(
  'chaparTrackingHistories',
  () => ChaparTrackingHistory
)
@FilterableUnPagedRelation('Coupon', () => Coupon)
@FilterableUnPagedRelation(
  'invoiceAddressValidationResults',
  () => InvoiceAddressValidationResult
)
@FilterableUnPagedRelation('invoiceAddresses', () => InvoiceAddress)
@FilterableUnPagedRelation(
  'invoiceBankGatewayHistories',
  () => InvoiceBankGatewayHistory
)
@FilterableUnPagedRelation(
  'invoicePaymentHistories',
  () => InvoicePaymentHistory
)
@FilterableUnPagedRelation('invoiceProducts', () => InvoiceProduct)
@FilterableUnPagedRelation('invoicePayments', () => InvoicePayment)
@FilterableUnPagedRelation('invoiceRatesResults', () => InvoiceRatesResult)
@FilterableUnPagedRelation('invoiceReversals', () => InvoiceReversal)
@FilterableUnPagedRelation('invoiceShippingRates', () => InvoiceShippingRate)
@FilterableUnPagedRelation('address', () => Address)
@FilterableUnPagedRelation(
  'chaparSettlementStatus',
  () => ChaparSettlementStatus
)
@FilterableRelation('currentInvoiceStatus', () => InvoiceStatus, {
  nullable: true,
})
@FilterableRelation('invoiceMode', () => InvoiceMode, { nullable: true })
@FilterableRelation('invoiceType', () => InvoiceType)
@FilterableUnPagedRelation('lockState2', () => InvoiceStatus)
@FilterableUnPagedRelation('returnedInvoices2', () => ReturnedInvoice)
@FilterableUnPagedRelation('returnedInvoices', () => ReturnedInvoice)
@FilterableUnPagedRelation('returnRequests', () => ReturnRequest)
@FilterableUnPagedRelation('returnRequestHistories', () => ReturnRequestHistory)
@FilterableUnPagedRelation('paymentMethodFields', () => PaymentMethodField)
@FilterableUnPagedRelation('visitor', () => Visitor)
@FilterableUnPagedRelation('visitorGroup', () => VisitorGroup)
@FilterableUnPagedRelation('visitorCoupon', () => VisitorCoupon)
@FilterableRelation('user', () => User, { nullable: true })
@FilterableRelation('replacementPaymentStatus', () => InvoicePaymentStatus, {
  nullable: true,
})
@FilterableUnPagedRelation('invoices', () => Invoice)
@FilterableRelation('parentInvoice', () => Invoice, { nullable: true })
@FilterableUnPagedRelation('moneyTransferConfirmedBy2', () => Invoice)
@FilterableUnPagedRelation('invoiceInvoiceStatuses', () => InvoiceInvoiceStatus)
@FilterableUnPagedRelation('shippingService', () => ShippingService)
@ObjectType()
export class Invoice {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  currentInvoiceStatusId: number;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  couponId?: number;

  @FilterableField({ nullable: true })
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

  @FilterableField({ nullable: true })
  shippingRate?: number;

  @FilterableField({ nullable: true })
  shippingRateCod?: number;

  @Field()
  paidCodShippingRate: number;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @FilterableField()
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

  @FilterableField({ nullable: true })
  subtotalPrice?: number;

  @FilterableField({ nullable: true })
  totalDiscount?: number;

  @Field({ nullable: true })
  totalCouponDiscount?: string;

  @Field({ nullable: true })
  totalTax?: number;

  @Field({ nullable: true })
  totalWalletCharged?: number;

  @FilterableField({ nullable: true })
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

  @FilterableField()
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

  @FilterableField()
  isDepot: number;

  @Field()
  forDigikala: number;

  @Field()
  isForAdvertisement: number;

  @Field()
  hasPriority: number;

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
  paymentCreditable: number;

  @Field({ nullable: true })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Field({ nullable: true })
  parentInvoiceId?: number;

  @Field({ nullable: true })
  lockState?: number;

  @Field({ nullable: true })
  lockStateDescription?: string;

  @Field({ nullable: true })
  moneyTransferConfirmed?: number;

  @Field({ nullable: true })
  moneyTransferConfirmedBy?: number;

  @Field()
  isReversible: number;

  @Field()
  useWallet: number;

  @Field()
  needsReview: number;

  @FilterableField()
  containsPadsOnly: number;

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
  canReturn: number;

  @Field({ nullable: true })
  sal?: number;

  @Field({ nullable: true })
  mah?: number;

  @Field({ nullable: true })
  roz?: number;

  @Field(() => [ChaparTrackingHistory], { nullable: true })
  chaparTrackingHistories?: ChaparTrackingHistory[];

  @Field(() => [Coupon], { nullable: true })
  coupons?: Coupon[];

  @Field(() => [InvoiceAddressValidationResult], { nullable: true })
  invoiceAddressValidationResults?: InvoiceAddressValidationResult[];

  @Field(() => [InvoiceAddress], { nullable: true })
  invoiceAddresses?: InvoiceAddress[];

  @Field(() => [InvoiceBankGatewayHistory], { nullable: true })
  invoiceBankGatewayHistories?: InvoiceBankGatewayHistory[];

  @Field(() => [InvoiceHistory], { nullable: true })
  invoiceHistories?: InvoiceHistory[];

  @Field(() => [InvoiceInvoiceStatus], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatus[];

  @Field(() => [InvoiceNegotiation], { nullable: true })
  invoiceNegotiations?: InvoiceNegotiation[];

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @Field(() => [InvoicePayment], { nullable: true })
  invoicePayments?: InvoicePayment[];

  @Field(() => [InvoiceProductHistory], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistory[];

  @Field(() => [InvoiceProduct], { nullable: true })
  invoiceProducts?: InvoiceProduct[];

  @Field(() => [InvoiceRatesResult], { nullable: true })
  invoiceRatesResults?: InvoiceRatesResult[];

  @Field(() => [InvoiceReversal], { nullable: true })
  invoiceReversals?: InvoiceReversal[];

  @Field(() => [InvoiceShippingRate], { nullable: true })
  invoiceShippingRates?: InvoiceShippingRate[];

  @Field(() => Address, { nullable: true })
  address?: Address;

  @Field(() => ChaparSettlementStatus, { nullable: true })
  chaparSettlementStatus?: ChaparSettlementStatus;

  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Field(() => InvoiceStatus, { nullable: true })
  currentInvoiceStatus?: InvoiceStatus;

  @Field(() => InvoiceMode, { nullable: true })
  invoiceMode?: InvoiceMode;

  @Field(() => InvoicePaymentStatus, { nullable: true })
  invoicePaymentStatus?: InvoicePaymentStatus;

  @Field(() => InvoiceType, { nullable: true })
  invoiceType?: InvoiceType;

  @Field(() => InvoiceStatus, { nullable: true })
  lockState2?: InvoiceStatus;

  @Field(() => User, { nullable: true })
  moneyTransferConfirmedBy2?: User;

  @Field(() => Invoice, { nullable: true })
  parentInvoice?: Invoice;

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => InvoicePaymentStatus, { nullable: true })
  replacementPaymentStatus?: InvoicePaymentStatus;

  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => VisitorCoupon, { nullable: true })
  visitorCoupon?: VisitorCoupon;

  @Field(() => VisitorGroup, { nullable: true })
  visitorGroup?: VisitorGroup;

  @Field(() => Visitor, { nullable: true })
  visitor?: Visitor;

  @Field(() => [PaymentMethodField], { nullable: true })
  paymentMethodFields?: PaymentMethodField[];

  @Field(() => [ReturnRequestHistory], { nullable: true })
  returnRequestHistories?: ReturnRequestHistory[];

  @Field(() => [ReturnRequest], { nullable: true })
  returnRequests?: ReturnRequest[];

  @Field(() => [ReturnedInvoice], { nullable: true })
  returnedInvoices?: ReturnedInvoice[];

  @Field(() => [ReturnedInvoice], { nullable: true })
  returnedInvoices2?: ReturnedInvoice[];

  @Field(() => ShippingService, { nullable: true })
  shippingService?: ShippingService;
}
