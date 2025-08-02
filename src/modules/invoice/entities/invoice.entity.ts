import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { ChaparTrackingHistory } from '@/modules/chapar-tracking-history/entities/chapar-tracking-history.entity';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';
import { InvoiceAddressValidationResult } from '@/modules/invoice-address-validation-result/entities/invoice-address-validation-result.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceBankGatewayHistory } from '@/modules/invoice-bank-gateway-history/entities/invoice-bank-gateway-history.entity';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InvoiceNegotiation } from '@/modules/invoice-negotiation/entities/invoice-negotiation.entity';
import { InvoicePayment } from '@/modules/invoice-payment/entities/invoice-payment.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { InvoiceRatesResult } from '@/modules/invoice-rates-result/entities/invoice-rates-result.entity';
import { InvoiceReversal } from '@/modules/invoice-reversal/entities/invoice-reversal.entity';
import { InvoiceShippingRate } from '@/modules/invoice-shipping-rate/entities/invoice-shipping-rate.entity';
import { Address } from '@/modules/address/entities/address.entity';
import { ChaparSettlementStatus } from '@/modules/chapar-settlement-status/entities/chapar-settlement-status.entity';
import { InvoiceStatus } from '@/modules/invoice-status/entities/invoice-status.entity';
import { InvoiceMode } from '@/modules/invoice-mode/entities/invoice-mode.entity';
import { InvoicePaymentStatus } from '@/modules/invoice-payment-status/entities/invoice-payment-status.entity';
import { InvoiceType } from '@/modules/invoice-type/entities/invoice-type.entity';
import { User } from '@/modules/user/entities/user.entity';
import { VisitorCoupon } from '@/modules/visitor-coupon/entities/visitor-coupon.entity';
import { VisitorGroup } from '@/modules/visitor-group/entities/visitor-group.entity';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';
import { PaymentMethodField } from '@/modules/payment-method-field/entities/payment-method-field.entity';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnedInvoice } from '@/modules/returned-invoice/entities/returned-invoice.entity';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';
import { InvoiceProductHistory } from '@/modules/invoice-product-history/entities/invoice-product-history.entity';
import { ShippingService } from '@/modules/shipping-service/entities/shipping-service.entity';

@Index('invoice_number', ['invoiceNumber'], { unique: true })
@Index('invoices_address_id_index', ['addressId'], {})
@Index(
  'invoices_chapar_settlement_status_id_index',
  ['chaparSettlementStatusId'],
  {}
)
@Index('invoices_coupon_id_index', ['couponId'], {})
@Index('invoices_crm_company_id_index', ['crmCompanyId'], {})
@Index('invoices_crm_company_person_id_index', ['crmCompanyPersonId'], {})
@Index('invoices_crm_pre_order_id_index', ['crmPreOrderId'], {})
@Index(
  'invoices_current_invoice_status_id_index',
  ['currentInvoiceStatusId'],
  {}
)
@Index('invoices_invoice_mode_id_index', ['invoiceModeId'], {})
@Index(
  'invoices_invoice_payment_status_id_index',
  ['invoicePaymentStatusId'],
  {}
)
@Index('invoices_invoice_type_id_index', ['invoiceTypeId'], {})
@Index('invoices_lock_state_foreign', ['lockState'], {})
@Index('invoices_mah_index', ['mah'], {})
@Index(
  'invoices_money_transfer_confirmed_by_index',
  ['moneyTransferConfirmedBy'],
  {}
)
@Index('invoices_parent_invoice_id_index', ['parentInvoiceId'], {})
@Index(
  'invoices_replacement_payment_status_id_index',
  ['replacementPaymentStatusId'],
  {}
)
@Index('invoices_roz_index', ['roz'], {})
@Index('invoices_sal_index', ['sal'], {})
@Index('invoices_user_id_index', ['userId'], {})
@Index('invoices_visitor_coupon_id_index', ['visitorCouponId'], {})
@Index('invoices_visitor_group_id_index', ['visitorGroupId'], {})
@Index('invoices_visitor_id_index', ['visitorId'], {})
@Index('issue_date', ['issueDate'], {})
@Entity('invoices', { schema: 'modema' })
export class Invoice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'current_invoice_status_id', unsigned: true })
  currentInvoiceStatusId: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId: number | null;

  @Column('int', { name: 'coupon_id', nullable: true, unsigned: true })
  couponId: number | null;

  @Column('varchar', {
    name: 'invoice_number',
    nullable: true,
    unique: true,
    length: 191,
  })
  invoiceNumber: string | null;

  @Column('varchar', { name: 'ref_id', nullable: true, length: 191 })
  refId: string | null;

  @Column('varchar', { name: 'sale_ref_id', nullable: true, length: 191 })
  saleRefId: string | null;

  @Column('varchar', { name: 'order_id', nullable: true, length: 191 })
  orderId: string | null;

  @Column('double', {
    name: 'tax_rate',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  taxRate: number | null;

  @Column('int', {
    name: 'selected_shipping_service_id',
    nullable: true,
    default: () => "'0'",
  })
  selectedShippingServiceId: number | null;

  @Column('decimal', {
    name: 'shipping_rate',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  shippingRate: number | null;

  @Column('decimal', {
    name: 'shipping_rate_cod',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod: number | null;

  @Column('double', {
    name: 'paid_cod_shipping_rate',
    precision: 22,
    default: () => "'0'",
  })
  paidCodShippingRate: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'last_name', length: 191 })
  lastName: string;

  @Column('datetime', { name: 'issue_date' })
  issueDate: Date;

  @Column('int', { name: 'visitor_coupon_id', nullable: true, unsigned: true })
  visitorCouponId: number | null;

  @Column('int', { name: 'visitor_id', nullable: true, unsigned: true })
  visitorId: number | null;

  @Column('int', { name: 'visitor_group_id', nullable: true, unsigned: true })
  visitorGroupId: number | null;

  @Column('double', {
    name: 'visitor_coupon_rate',
    nullable: true,
    precision: 22,
  })
  visitorCouponRate: number | null;

  @Column('double', { name: 'visitor_rate', nullable: true, precision: 22 })
  visitorRate: number | null;

  @Column('varchar', {
    name: 'partner_code',
    comment: 'Code Moarref(Baraye Foroshgahhaye Hamkar)',
    length: 191,
  })
  partnerCode: string;

  @Column('double', {
    name: 'total_visitor_share',
    nullable: true,
    precision: 22,
  })
  totalVisitorShare: number | null;

  @Column('decimal', {
    name: 'subtotal_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  subtotalPrice: number | null;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount: number | null;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount: number | null;

  @Column('decimal', {
    name: 'total_tax',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalTax: number | null;

  @Column('decimal', {
    name: 'total_wallet_charged',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWalletCharged: number | null;

  @Column('decimal', {
    name: 'total_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalPrice: number | null;

  @Column('decimal', {
    name: 'additions',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  additions: string;

  @Column('tinyint', {
    name: 'cash_on_delivery',
    width: 1,
    default: () => "'0'",
  })
  cashOnDelivery: number;

  @Column('varchar', {
    name: 'payment_error_message',
    nullable: true,
    length: 191,
  })
  paymentErrorMessage: string | null;

  @Column('int', {
    name: 'invoice_payment_status_id',
    nullable: true,
    unsigned: true,
  })
  invoicePaymentStatusId: number | null;

  @Column('tinyint', { name: 'free_delivery', width: 1, default: () => "'1'" })
  freeDelivery: number;

  @Column('varchar', { name: 'tracking_code', nullable: true, length: 191 })
  trackingCode: string | null;

  @Column('datetime', { name: 'delivered_date', nullable: true })
  deliveredDate: Date | null;

  @Column('varchar', {
    name: 'money_transfer_ref_code',
    nullable: true,
    length: 191,
  })
  moneyTransferRefCode: string | null;

  @Column('int', { name: 'package_count', nullable: true })
  packageCount: number | null;

  @Column('tinyint', {
    name: 'visitor_share_calculated',
    width: 1,
    default: () => "'0'",
  })
  visitorShareCalculated: number;

  @Column('tinyint', {
    name: 'is_chapar_delivery',
    width: 1,
    default: () => "'1'",
  })
  isChaparDelivery: number;

  @Column('varchar', { name: 'chapar_status', nullable: true, length: 191 })
  chaparStatus: string | null;

  @Column('int', {
    name: 'chapar_settlement_status_id',
    nullable: true,
    unsigned: true,
  })
  chaparSettlementStatusId: number | null;

  @Column('bigint', {
    name: 'crm_pre_order_id',
    nullable: true,
    unsigned: true,
  })
  crmPreOrderId: string | null;

  @Column('bigint', { name: 'crm_company_id', nullable: true, unsigned: true })
  crmCompanyId: string | null;

  @Column('bigint', {
    name: 'crm_company_person_id',
    nullable: true,
    unsigned: true,
  })
  crmCompanyPersonId: string | null;

  @Column('tinyint', { name: 'is_depot', width: 1, default: () => "'0'" })
  isDepot: number;

  @Column('tinyint', { name: 'for_digikala', width: 1, default: () => "'0'" })
  forDigikala: number;

  @Column('tinyint', {
    name: 'is_for_advertisement',
    width: 1,
    default: () => "'0'",
  })
  isForAdvertisement: number;

  @Column('tinyint', { name: 'has_priority', width: 1, default: () => "'0'" })
  hasPriority: number;

  @Column('decimal', {
    name: 'replacement_additional_price',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  replacementAdditionalPrice: string;

  @Column('int', {
    name: 'replacement_payment_status_id',
    nullable: true,
    unsigned: true,
  })
  replacementPaymentStatusId: number | null;

  @Column('varchar', {
    name: 'replacement_price_money_transfer_code',
    nullable: true,
    length: 191,
  })
  replacementPriceMoneyTransferCode: string | null;

  @Column('double', {
    name: 'digikala_share_percent',
    nullable: true,
    precision: 22,
  })
  digikalaSharePercent: number | null;

  @Column('double', { name: 'digikala_share', nullable: true, precision: 22 })
  digikalaShare: number | null;

  @Column('int', { name: 'invoice_mode_id', nullable: true, unsigned: true })
  invoiceModeId: number | null;

  @Column('int', { name: 'invoice_type_id', nullable: true, unsigned: true })
  invoiceTypeId: number | null;

  @Column('tinyint', {
    name: 'payment_creditable',
    width: 1,
    default: () => "'0'",
  })
  paymentCreditable: number;

  @Column('varchar', {
    name: 'wholesale_remaining_money_transfer_ref_code',
    nullable: true,
    length: 191,
  })
  wholesaleRemainingMoneyTransferRefCode: string | null;

  @Column('int', { name: 'parent_invoice_id', nullable: true, unsigned: true })
  parentInvoiceId: number | null;

  @Column('int', { name: 'lock_state', nullable: true, unsigned: true })
  lockState: number | null;

  @Column('text', { name: 'lock_state_description', nullable: true })
  lockStateDescription: string | null;

  @Column('tinyint', {
    name: 'money_transfer_confirmed',
    nullable: true,
    width: 1,
  })
  moneyTransferConfirmed: number | null;

  @Column('int', {
    name: 'money_transfer_confirmed_by',
    nullable: true,
    unsigned: true,
  })
  moneyTransferConfirmedBy: number | null;

  @Column('tinyint', { name: 'is_reversible', width: 1, default: () => "'0'" })
  isReversible: number;

  @Column('tinyint', { name: 'use_wallet', width: 1, default: () => "'0'" })
  useWallet: number;

  @Column('tinyint', { name: 'needs_review', width: 1, default: () => "'0'" })
  needsReview: number;

  @Column('tinyint', {
    name: 'contains_pads_only',
    width: 1,
    default: () => "'0'",
  })
  containsPadsOnly: number;

  @Column('date', { name: 'deadline_date', nullable: true })
  deadlineDate: string | null;

  @Column('date', { name: 'deadline_date_old', nullable: true })
  deadlineDateOld: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('text', { name: 'accounting_description', nullable: true })
  accountingDescription: string | null;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @Column('varchar', { name: 'shipment_uuid', nullable: true, length: 191 })
  shipmentUuid: string | null;

  @Column('double', { name: 'total_price_old', nullable: true, precision: 22 })
  totalPriceOld: number | null;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId: number | null;

  @Column('int', { name: 'sepidar_code', nullable: true })
  sepidarCode: number | null;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('datetime', { name: 'seen_at', nullable: true })
  seenAt: Date | null;

  @Column('tinyint', { name: 'can_return', width: 1, default: () => "'0'" })
  canReturn: number;

  @Column('smallint', { name: 'sal', nullable: true, unsigned: true })
  sal: number | null;

  @Column('tinyint', { name: 'mah', nullable: true, unsigned: true })
  mah: number | null;

  @Column('tinyint', { name: 'roz', nullable: true, unsigned: true })
  roz: number | null;

  @OneToMany(
    () => ChaparTrackingHistory,
    (chaparTrackingHistory) => chaparTrackingHistory.invoice
  )
  chaparTrackingHistories: ChaparTrackingHistory[];

  @OneToMany(() => Coupon, (coupon) => coupon.retargetingInvoice)
  coupons: Coupon[];

  @OneToMany(
    () => InvoiceAddressValidationResult,
    (invoiceAddressValidationResult) => invoiceAddressValidationResult.invoice
  )
  invoiceAddressValidationResults: InvoiceAddressValidationResult[];

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.invoice)
  invoiceAddresses: InvoiceAddress[];

  @OneToMany(
    () => InvoiceBankGatewayHistory,
    (invoiceBankGatewayHistory) => invoiceBankGatewayHistory.invoice
  )
  invoiceBankGatewayHistories: InvoiceBankGatewayHistory[];

  @OneToMany(() => InvoiceHistory, (invoiceHistory) => invoiceHistory.invoice)
  invoiceHistories: InvoiceHistory[];

  @OneToMany(
    () => InvoiceInvoiceStatus,
    (invoiceInvoiceStatus) => invoiceInvoiceStatus.invoice
  )
  invoiceInvoiceStatuses: InvoiceInvoiceStatus[];

  @OneToMany(
    () => InvoiceNegotiation,
    (invoiceNegotiation) => invoiceNegotiation.invoice
  )
  invoiceNegotiations: InvoiceNegotiation[];

  @OneToMany(
    () => InvoicePaymentHistory,
    (invoicePaymentHistory) => invoicePaymentHistory.invoice
  )
  invoicePaymentHistories: InvoicePaymentHistory[];

  @OneToMany(() => InvoicePayment, (invoicePayment) => invoicePayment.invoice)
  invoicePayments: InvoicePayment[];

  @OneToMany(
    () => InvoiceProductHistory,
    (invoiceProductHistory) => invoiceProductHistory.invoice
  )
  invoiceProductHistories: InvoiceProductHistory[];

  @OneToMany(() => InvoiceProduct, (invoiceProduct) => invoiceProduct.invoice)
  invoiceProducts: InvoiceProduct[];

  @OneToMany(
    () => InvoiceRatesResult,
    (invoiceRatesResults) => invoiceRatesResults.invoice
  )
  invoiceRatesResults: InvoiceRatesResult[];

  @OneToMany(
    () => InvoiceReversal,
    (invoiceReversal) => invoiceReversal.invoice
  )
  invoiceReversals: InvoiceReversal[];

  @OneToMany(
    () => InvoiceShippingRate,
    (invoiceShippingRate) => invoiceShippingRate.invoice
  )
  invoiceShippingRates: InvoiceShippingRate[];

  @ManyToOne(() => Address, (addresses) => addresses.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'address_id', referencedColumnName: 'id' }])
  address: Address;

  @ManyToOne(
    () => ChaparSettlementStatus,
    (chaparSettlementStatus) => chaparSettlementStatus.invoices,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([
    { name: 'chapar_settlement_status_id', referencedColumnName: 'id' },
  ])
  chaparSettlementStatus: ChaparSettlementStatus;

  @ManyToOne(() => Coupon, (coupon) => coupon.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupon;

  @ManyToOne(() => InvoiceStatus, (invoiceStatus) => invoiceStatus.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([
    { name: 'current_invoice_status_id', referencedColumnName: 'id' },
  ])
  currentInvoiceStatus: InvoiceStatus;

  @ManyToOne(() => InvoiceMode, (invoiceMode) => invoiceMode.invoices, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_mode_id', referencedColumnName: 'id' }])
  invoiceMode: InvoiceMode;

  @ManyToOne(
    () => InvoicePaymentStatus,
    (invoicePaymentStatus) => invoicePaymentStatus.invoices,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'invoice_payment_status_id', referencedColumnName: 'id' },
  ])
  invoicePaymentStatus: InvoicePaymentStatus;

  @ManyToOne(() => InvoiceType, (invoiceType) => invoiceType.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_type_id', referencedColumnName: 'id' }])
  invoiceType: InvoiceType;

  @ManyToOne(() => InvoiceStatus, (invoiceStatus) => invoiceStatus.invoices2, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'lock_state', referencedColumnName: 'id' }])
  lockState2: InvoiceStatus;

  @ManyToOne(() => User, (user) => user.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([
    { name: 'money_transfer_confirmed_by', referencedColumnName: 'id' },
  ])
  moneyTransferConfirmedBy2: User;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'parent_invoice_id', referencedColumnName: 'id' }])
  parentInvoice: Invoice;

  @OneToMany(() => Invoice, (invoice) => invoice.parentInvoice)
  invoices: Invoice[];

  @ManyToOne(
    () => InvoicePaymentStatus,
    (invoicePaymentStatus) => invoicePaymentStatus.invoices2,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'replacement_payment_status_id', referencedColumnName: 'id' },
  ])
  replacementPaymentStatus: InvoicePaymentStatus;

  @ManyToOne(() => User, (user) => user.invoices, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => VisitorCoupon, (visitorCoupon) => visitorCoupon.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visitor_coupon_id', referencedColumnName: 'id' }])
  visitorCoupon: VisitorCoupon;

  @ManyToOne(() => VisitorGroup, (visitorGroup) => visitorGroup.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visitor_group_id', referencedColumnName: 'id' }])
  visitorGroup: VisitorGroup;

  @ManyToOne(() => Visitor, (visitor) => visitor.invoices, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'visitor_id', referencedColumnName: 'id' }])
  visitor: Visitor;

  @OneToMany(
    () => PaymentMethodField,
    (paymentMethodField) => paymentMethodField.invoice
  )
  paymentMethodFields: PaymentMethodField[];

  @OneToMany(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.invoice
  )
  returnRequestHistories: ReturnRequestHistory[];

  @OneToMany(() => ReturnRequest, (returnRequest) => returnRequest.invoice)
  returnRequests: ReturnRequest[];

  @OneToMany(
    () => ReturnedInvoice,
    (returnedInvoices) => returnedInvoices.invoice
  )
  returnedInvoices: ReturnedInvoice[];

  @OneToMany(
    () => ReturnedInvoice,
    (returnedInvoices) => returnedInvoices.replacementInvoice
  )
  returnedInvoices2: ReturnedInvoice[];

  @ManyToOne(
    () => ShippingService,
    (shippingService) => shippingService.invoices,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([
    {
      name: 'selected_shipping_service_id',
      referencedColumnName: 'id',
    },
  ])
  shippingService: ShippingService;
}
