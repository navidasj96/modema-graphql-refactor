import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_histories_editor_user_id_index', ['editorUserId'], {})
@Index('invoice_histories_invoice_address_id_index', ['invoiceAddressId'], {})
@Index('invoice_histories_invoice_id_index', ['invoiceId'], {})
@Index(
  'invoice_histories_money_transfer_confirmed_by_index',
  ['moneyTransferConfirmedBy'],
  {},
)
@Entity('invoice_histories', { schema: 'modema' })
export class InvoiceHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'editor_user_id', unsigned: true })
  editorUserId: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'current_invoice_status_id' })
  currentInvoiceStatusId: number;

  @Column('int', { name: 'user_id', nullable: true })
  userId?: number;

  @Column('int', { name: 'address_id' })
  addressId: number;

  @Column('double', { name: 'total_price_old', nullable: true, precision: 22 })
  totalPriceOld?: number;

  @Column('int', { name: 'coupon_id', nullable: true })
  couponId?: number;

  @Column('varchar', { name: 'invoice_number', nullable: true, length: 191 })
  invoiceNumber?: string;

  @Column('varchar', { name: 'ref_id', nullable: true, length: 191 })
  refId?: string;

  @Column('varchar', { name: 'sale_ref_id', nullable: true, length: 191 })
  saleRefId?: string;

  @Column('varchar', { name: 'order_id', nullable: true, length: 191 })
  orderId?: string;

  @Column('double', { name: 'tax_rate', nullable: true, precision: 22 })
  taxRate?: number;

  @Column('int', { name: 'selected_shipping_service_id', nullable: true })
  selectedShippingServiceId?: number;

  @Column('decimal', {
    name: 'shipping_rate',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRate?: string;

  @Column('decimal', {
    name: 'shipping_rate_cod',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shippingRateCod?: string;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('varchar', { name: 'last_name', length: 191 })
  lastName: string;

  @Column('datetime', { name: 'issue_date' })
  issueDate: Date;

  @Column('int', { name: 'visitor_coupon_id', nullable: true })
  visitorCouponId?: number;

  @Column('int', { name: 'visitor_id', nullable: true })
  visitorId?: number;

  @Column('int', { name: 'visitor_group_id', nullable: true })
  visitorGroupId?: number;

  @Column('double', {
    name: 'visitor_coupon_rate',
    nullable: true,
    precision: 22,
  })
  visitorCouponRate?: number;

  @Column('double', { name: 'visitor_rate', nullable: true, precision: 22 })
  visitorRate?: number;

  @Column('varchar', { name: 'partner_code', nullable: true, length: 191 })
  partnerCode?: string;

  @Column('double', {
    name: 'total_visitor_share',
    nullable: true,
    precision: 22,
  })
  totalVisitorShare?: number;

  @Column('decimal', {
    name: 'subtotal_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  subtotalPrice?: string;

  @Column('decimal', {
    name: 'total_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalDiscount?: string;

  @Column('decimal', {
    name: 'total_coupon_discount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalCouponDiscount?: string;

  @Column('decimal', {
    name: 'total_tax',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalTax?: string;

  @Column('decimal', {
    name: 'total_wallet_charged',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalWalletCharged?: string;

  @Column('decimal', {
    name: 'total_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  totalPrice?: string;

  @Column('decimal', {
    name: 'additions',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  additions: string;

  @Column('tinyint', { name: 'cash_on_delivery' })
  cashOnDelivery: number;

  @Column('varchar', {
    name: 'payment_error_message',
    nullable: true,
    length: 191,
  })
  paymentErrorMessage?: string;

  @Column('int', { name: 'invoice_payment_status_id', nullable: true })
  invoicePaymentStatusId?: number;

  @Column('tinyint', { name: 'free_delivery' })
  freeDelivery: number;

  @Column('varchar', { name: 'tracking_code', nullable: true, length: 191 })
  trackingCode?: string;

  @Column('datetime', { name: 'delivered_date', nullable: true })
  deliveredDate?: Date;

  @Column('varchar', {
    name: 'money_transfer_ref_code',
    nullable: true,
    length: 191,
  })
  moneyTransferRefCode?: string;

  @Column('int', { name: 'package_count', nullable: true })
  packageCount?: number;

  @Column('tinyint', { name: 'visitor_share_calculated' })
  visitorShareCalculated: number;

  @Column('tinyint', { name: 'is_chapar_delivery' })
  isChaparDelivery: number;

  @Column('varchar', { name: 'chapar_status', nullable: true, length: 191 })
  chaparStatus?: string;

  @Column('int', { name: 'chapar_settlement_status_id', nullable: true })
  chaparSettlementStatusId?: number;

  @Column('bigint', { name: 'crm_pre_order_id', nullable: true })
  crmPreOrderId?: string;

  @Column('bigint', { name: 'crm_company_id', nullable: true })
  crmCompanyId?: string;

  @Column('bigint', { name: 'crm_company_person_id', nullable: true })
  crmCompanyPersonId?: string;

  @Column('tinyint', { name: 'is_depot', nullable: true, width: 1 })
  isDepot?: boolean;

  @Column('tinyint', { name: 'for_digikala', width: 1, default: () => "'0'" })
  forDigikala: boolean;

  @Column('tinyint', {
    name: 'is_for_advertisement',
    width: 1,
    default: () => "'0'",
  })
  isForAdvertisement: boolean;

  @Column('tinyint', { name: 'has_priority', width: 1, default: () => "'0'" })
  hasPriority: boolean;

  @Column('decimal', {
    name: 'replacement_additional_price',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  replacementAdditionalPrice?: string;

  @Column('int', { name: 'replacement_payment_status_id', nullable: true })
  replacementPaymentStatusId?: number;

  @Column('varchar', {
    name: 'replacement_price_money_transfer_code',
    nullable: true,
    length: 191,
  })
  replacementPriceMoneyTransferCode?: string;

  @Column('double', {
    name: 'digikala_share_percent',
    nullable: true,
    precision: 22,
  })
  digikalaSharePercent?: number;

  @Column('double', { name: 'digikala_share', nullable: true, precision: 22 })
  digikalaShare?: number;

  @Column('int', { name: 'invoice_mode_id', nullable: true })
  invoiceModeId?: number;

  @Column('int', { name: 'invoice_type_id', nullable: true })
  invoiceTypeId?: number;

  @Column('tinyint', { name: 'payment_creditable', nullable: true, width: 1 })
  paymentCreditable?: boolean;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('text', { name: 'accounting_description', nullable: true })
  accountingDescription?: string;

  @Column('int', { name: 'invoice_address_id', unsigned: true })
  invoiceAddressId: number;

  @Column('int', { name: 'country_id' })
  countryId: number;

  @Column('int', { name: 'state_id' })
  stateId: number;

  @Column('int', { name: 'city_id' })
  cityId: number;

  @Column('varchar', { name: 'fullname', nullable: true, length: 191 })
  fullname?: string;

  @Column('varchar', { name: 'zip_code', nullable: true, length: 191 })
  zipCode?: string;

  @Column('varchar', { name: 'address', length: 191 })
  address: string;

  @Column('varchar', { name: 'address2', nullable: true, length: 191 })
  address2?: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

  @Column('varchar', { name: 'phone2', nullable: true, length: 191 })
  phone2?: string;

  @Column('varchar', { name: 'longitude', nullable: true, length: 191 })
  longitude?: string;

  @Column('varchar', { name: 'latitude', nullable: true, length: 191 })
  latitude?: string;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email?: string;

  @Column('varchar', { name: 'full_address', nullable: true, length: 191 })
  fullAddress?: string;

  @Column('int', { name: 'lock_state', nullable: true })
  lockState?: number;

  @Column('tinyint', {
    name: 'money_transfer_confirmed',
    nullable: true,
    width: 1,
  })
  moneyTransferConfirmed?: boolean;

  @Column('int', {
    name: 'money_transfer_confirmed_by',
    nullable: true,
    unsigned: true,
  })
  moneyTransferConfirmedBy?: number;

  @Column('tinyint', { name: 'is_reversible', width: 1, default: () => "'0'" })
  isReversible: boolean;

  @Column('tinyint', { name: 'use_wallet', nullable: true, width: 1 })
  useWallet?: boolean;

  @Column('tinyint', { name: 'needs_review', width: 1, default: () => "'0'" })
  needsReview: boolean;

  @Column('int', { name: 'parent_invoice_id', nullable: true })
  parentInvoiceId?: number;

  @Column('varchar', {
    name: 'wholesale_remaining_money_transfer_ref_code',
    nullable: true,
    length: 191,
  })
  wholesaleRemainingMoneyTransferRefCode?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
