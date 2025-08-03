import { AddressPure } from '@/modules/address/domain/address.pure';
import { ChaparSettlementStatusPure } from '@/modules/chapar-settlement-status/domain/chapar-settlement-status.pure';
import { ChaparTrackingHistoryPure } from '@/modules/chapar-tracking-history/domain/chapar-tracking-history.pure';
import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { InvoiceAddressValidationResultPure } from '@/modules/invoice-address-validation-result/domain/invoice-address-validation-result.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { InvoiceBankGatewayHistoryPure } from '@/modules/invoice-bank-gateway-history/domain/invoice-bank-gateway-history.pure';
import { InvoiceHistoryPure } from '@/modules/invoice-history/domain/invoice-history.pure';
import { InvoiceInvoiceStatusPure } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status.pure';
import { InvoiceModePure } from '@/modules/invoice-mode/domain/invoice-mode.pure';
import { InvoiceNegotiationPure } from '@/modules/invoice-negotiation/domain/invoice-negotiation.pure';
import { InvoicePaymentHistoryPure } from '@/modules/invoice-payment-history/domain/invoice-payment-history.pure';
import { InvoicePaymentStatusPure } from '@/modules/invoice-payment-status/domain/invoice-payment-status.pure';
import { InvoicePaymentPure } from '@/modules/invoice-payment/domain/invoice-payment.pure';
import { InvoiceProductHistoryPure } from '@/modules/invoice-product-history/domain/invoice-product-history.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { InvoiceRatesResultPure } from '@/modules/invoice-rates-result/domain/invoice-rates-result.pure';
import { InvoiceReversalPure } from '@/modules/invoice-reversal/domain/invoice-reversal.pure';
import { InvoiceShippingRatePure } from '@/modules/invoice-shipping-rate/domain/invoice-shipping-rate.pure';
import { InvoiceStatusPure } from '@/modules/invoice-status/domain/invoice-status.pure';
import { InvoiceTypePure } from '@/modules/invoice-type/domain/invoice-type.pure';
import { PaymentMethodFieldPure } from '@/modules/payment-method-field/domain/payment-method-field.pure';
import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { ReturnedInvoicePure } from '@/modules/returned-invoice/domain/returned-invoice.pure';
import { ShippingServicePure } from '@/modules/shipping-service/domain/shipping-service.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { VisitorCouponPure } from '@/modules/visitor-coupon/domain/visitor-coupon.pure';
import { VisitorGroupPure } from '@/modules/visitor-group/domain/visitor-group.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.puer';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoicePureDomain')
@ObjectType()
export class InvoicePure {
  @Field(() => ID)
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
  shippingRate?: number;

  @Field({ nullable: true })
  shippingRateCod?: number;

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
  subtotalPrice?: number;

  @Field({ nullable: true })
  totalDiscount?: number;

  @Field({ nullable: true })
  totalCouponDiscount?: string;

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

  @Field()
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

  @Field()
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

  @Field(() => [ChaparTrackingHistoryPure], { nullable: true })
  chaparTrackingHistories?: ChaparTrackingHistoryPure[];

  @Field(() => [CouponPure], { nullable: true })
  coupons?: CouponPure[];

  @Field(() => [InvoiceAddressValidationResultPure], { nullable: true })
  invoiceAddressValidationResults?: InvoiceAddressValidationResultPure[];

  @Field(() => [InvoiceAddressPure], { nullable: true })
  invoiceAddresses?: InvoiceAddressPure[];

  @Field(() => [InvoiceBankGatewayHistoryPure], { nullable: true })
  invoiceBankGatewayHistories?: InvoiceBankGatewayHistoryPure[];

  @Field(() => [InvoiceHistoryPure], { nullable: true })
  invoiceHistories?: InvoiceHistoryPure[];

  @Field(() => [InvoiceInvoiceStatusPure], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatusPure[];

  @Field(() => [InvoiceNegotiationPure], { nullable: true })
  invoiceNegotiations?: InvoiceNegotiationPure[];

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistoryPure[];

  @Field(() => [InvoicePaymentPure], { nullable: true })
  invoicePayments?: InvoicePaymentPure[];

  @Field(() => [InvoiceProductHistoryPure], { nullable: true })
  invoiceProductHistories?: InvoiceProductHistoryPure[];

  @Field(() => [InvoiceProductPure], { nullable: true })
  invoiceProducts?: InvoiceProductPure[];

  @Field(() => [InvoiceRatesResultPure], { nullable: true })
  invoiceRatesResults?: InvoiceRatesResultPure[];

  @Field(() => [InvoiceReversalPure], { nullable: true })
  invoiceReversals?: InvoiceReversalPure[];

  @Field(() => [InvoiceShippingRatePure], { nullable: true })
  invoiceShippingRates?: InvoiceShippingRatePure[];

  @Field(() => AddressPure, { nullable: true })
  address?: AddressPure;

  @Field(() => ChaparSettlementStatusPure, { nullable: true })
  chaparSettlementStatus?: ChaparSettlementStatusPure;

  @Field(() => CouponPure, { nullable: true })
  coupon?: CouponPure;

  @Field(() => InvoiceStatusPure, { nullable: true })
  currentInvoiceStatus?: InvoiceStatusPure;

  @Field(() => InvoiceModePure, { nullable: true })
  invoiceMode?: InvoiceModePure;

  @Field(() => InvoicePaymentStatusPure, { nullable: true })
  invoicePaymentStatus?: InvoicePaymentStatusPure;

  @Field(() => InvoiceTypePure, { nullable: true })
  invoiceType?: InvoiceTypePure;

  @Field(() => InvoiceStatusPure, { nullable: true })
  lockState2?: InvoiceStatusPure;

  @Field(() => UserPure, { nullable: true })
  moneyTransferConfirmedBy2?: UserPure;

  @Field(() => Invoice, { nullable: true })
  parentInvoice?: Invoice;

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => InvoicePaymentStatusPure, { nullable: true })
  replacementPaymentStatus?: InvoicePaymentStatusPure;

  @Field(() => UserPure, { nullable: true })
  user?: UserPure;

  @Field(() => VisitorCouponPure, { nullable: true })
  visitorCoupon?: VisitorCouponPure;

  @Field(() => VisitorGroupPure, { nullable: true })
  visitorGroup?: VisitorGroupPure;

  @Field(() => VisitorPure, { nullable: true })
  visitor?: VisitorPure;

  @Field(() => [PaymentMethodFieldPure], { nullable: true })
  paymentMethodFields?: PaymentMethodFieldPure[];

  @Field(() => [ReturnRequestHistoryPure], { nullable: true })
  returnRequestHistories?: ReturnRequestHistoryPure[];

  @Field(() => [ReturnRequestPure], { nullable: true })
  returnRequests?: ReturnRequestPure[];

  @Field(() => [ReturnedInvoicePure], { nullable: true })
  returnedInvoices?: ReturnedInvoicePure[];

  @Field(() => [ReturnedInvoicePure], { nullable: true })
  returnedInvoices2?: ReturnedInvoicePure[];

  @Field(() => ShippingServicePure, { nullable: true })
  shippingService?: ShippingServicePure;
}
