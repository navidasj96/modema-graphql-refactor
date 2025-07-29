import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('history_created_by', ['historyCreatedBy'], {})
@Index('settings_history_production_roll_id_index', ['productionRollId'], {})
@Entity('settings_history', { schema: 'modema' })
export class SettingsHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'setting_id', unsigned: true })
  settingId: number;

  @Column('decimal', { name: 'price_per_meter', precision: 18, scale: 2 })
  pricePerMeter: string;

  @Column('double', {
    name: 'min_width',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  minWidth: number | null;

  @Column('double', {
    name: 'max_width',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  maxWidth: number | null;

  @Column('double', {
    name: 'min_length',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  minLength: number | null;

  @Column('double', {
    name: 'max_length',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  maxLength: number | null;

  @Column('double', {
    name: 'weight_per_meter',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  weightPerMeter: number | null;

  @Column('double', {
    name: 'pad_weight_per_meter',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  padWeightPerMeter: number | null;

  @Column('double', {
    name: 'average_rolled_height',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  averageRolledHeight: number | null;

  @Column('double', {
    name: 'max_distance_for_free_delivery',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  maxDistanceForFreeDelivery: number | null;

  @Column('int', { name: 'delay_days_normal', nullable: true, unsigned: true })
  delayDaysNormal: number | null;

  @Column('int', { name: 'delay_days_custom', nullable: true, unsigned: true })
  delayDaysCustom: number | null;

  @Column('double', {
    name: 'tax_rate',
    nullable: true,
    unsigned: true,
    precision: 22,
  })
  taxRate: number | null;

  @Column('tinyint', { name: 'free_delivery', width: 1, default: () => "'1'" })
  freeDelivery: number;

  @Column('decimal', {
    name: 'minimum_price_for_free_delivery',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'150000.00'",
  })
  minimumPriceForFreeDelivery: string | null;

  @Column('bigint', {
    name: 'box_capacity',
    nullable: true,
    default: () => "'6'",
  })
  boxCapacity: string | null;

  @Column('double', {
    name: 'digikala_share_percent',
    nullable: true,
    precision: 22,
  })
  digikalaSharePercent: number | null;

  @Column('varchar', {
    name: 'roll_reference_code',
    nullable: true,
    length: 191,
  })
  rollReferenceCode: string | null;

  @Column('int', { name: 'production_roll_id', nullable: true, unsigned: true })
  productionRollId: number | null;

  @Column('varchar', { name: 'pad_roll_ref_code', nullable: true, length: 191 })
  padRollRefCode: string | null;

  @Column('tinyint', {
    name: 'redis_worker_status',
    width: 1,
    default: () => "'0'",
  })
  redisWorkerStatus: number;

  @Column('tinyint', { name: 'preorder_mode', width: 1, default: () => "'0'" })
  preorderMode: number;

  @Column('decimal', {
    name: 'shiraz_delivery_rate',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  shirazDeliveryRate: string | null;

  @Column('decimal', {
    name: 'around_shiraz_delivery_rate',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  aroundShirazDeliveryRate: string | null;

  @Column('decimal', {
    name: 'default_delivery_rate',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  defaultDeliveryRate: string | null;

  @Column('int', {
    name: 'delay_report_days_for_admin',
    nullable: true,
    default: () => "'11'",
  })
  delayReportDaysForAdmin: number | null;

  @Column('int', {
    name: 'delay_report_days_for_production',
    nullable: true,
    default: () => "'6'",
  })
  delayReportDaysForProduction: number | null;

  @Column('text', { name: 'snapp_token', nullable: true })
  snappToken: string | null;

  @Column('datetime', { name: 'snapp_token_expires_at', nullable: true })
  snappTokenExpiresAt: Date | null;

  @Column('text', { name: 'digipay_token', nullable: true })
  digipayToken: string | null;

  @Column('datetime', { name: 'digipay_token_expires_at', nullable: true })
  digipayTokenExpiresAt: Date | null;

  @Column('text', { name: 'tara_token', nullable: true })
  taraToken: string | null;

  @Column('datetime', { name: 'tara_token_expires_at', nullable: true })
  taraTokenExpiresAt: Date | null;

  @Column('int', {
    name: 'return_deadline_for_test_delivered',
    default: () => "'8'",
  })
  returnDeadlineForTestDelivered: number;

  @Column('int', {
    name: 'return_deadline_for_test_sent',
    default: () => "'12'",
  })
  returnDeadlineForTestSent: number;

  @Column('int', {
    name: 'return_deadline_for_guarantee',
    default: () => "'366'",
  })
  returnDeadlineForGuarantee: number;

  @Column('int', {
    name: 'retargeting_coupon_expiry_days',
    nullable: true,
    default: () => "'50'",
  })
  retargetingCouponExpiryDays: number | null;

  @Column('int', {
    name: 'retargeting_coupon_amount',
    nullable: true,
    default: () => "'200000'",
  })
  retargetingCouponAmount: number | null;

  @Column('int', {
    name: 'retargeting_coupon_maximum_percent',
    nullable: true,
    default: () => "'15'",
  })
  retargetingCouponMaximumPercent: number | null;

  @Column('int', {
    name: 'retargeting_coupon_maximum_use',
    nullable: true,
    default: () => "'3'",
  })
  retargetingCouponMaximumUse: number | null;

  @Column('int', {
    name: 'retargeting_wallet_charge_amount',
    nullable: true,
    default: () => "'200000'",
  })
  retargetingWalletChargeAmount: number | null;

  @Column('int', {
    name: 'retargeting_wallet_maximum_percent',
    nullable: true,
    default: () => "'25'",
  })
  retargetingWalletMaximumPercent: number | null;

  @Column('int', {
    name: 'retargeting_notify_after_sent_days',
    nullable: true,
    default: () => "'4'",
  })
  retargetingNotifyAfterSentDays: number | null;

  @Column('int', {
    name: 'retargeting_notify_if_not_used_days',
    nullable: true,
    default: () => "'30'",
  })
  retargetingNotifyIfNotUsedDays: number | null;

  @Column('int', {
    name: 'retargeting_first_notify_wallet_usage_days',
    nullable: true,
    default: () => "'120'",
  })
  retargetingFirstNotifyWalletUsageDays: number | null;

  @Column('int', {
    name: 'retargeting_second_notify_wallet_usage_days',
    nullable: true,
    default: () => "'240'",
  })
  retargetingSecondNotifyWalletUsageDays: number | null;

  @Column('int', {
    name: 'retargeting_third_notify_wallet_usage_days',
    nullable: true,
    default: () => "'344'",
  })
  retargetingThirdNotifyWalletUsageDays: number | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_after_sale',
    nullable: true,
  })
  retargetingTextToCustomerAfterSale: string | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_after_sent',
    nullable: true,
  })
  retargetingTextToCustomerAfterSent: string | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_after_friend_invoice_sent',
    nullable: true,
  })
  retargetingTextToCustomerAfterFriendInvoiceSent: string | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_if_coupon_not_used',
    nullable: true,
  })
  retargetingTextToCustomerIfCouponNotUsed: string | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_if_wallet_not_used',
    nullable: true,
  })
  retargetingTextToCustomerIfWalletNotUsed: string | null;

  @Column('text', {
    name: 'retargeting_text_to_customer_after_each_friend_sale',
    nullable: true,
  })
  retargetingTextToCustomerAfterEachFriendSale: string | null;

  @Column('int', {
    name: 'retargeting_commenting_reminder_days',
    default: () => "'14'",
  })
  retargetingCommentingReminderDays: number;

  @Column('text', {
    name: 'retargeting_commenting_reminder_text',
    nullable: true,
  })
  retargetingCommentingReminderText: string | null;

  @Column('int', { name: 'campaign_pet_discount_amount', nullable: true })
  campaignPetDiscountAmount: number | null;

  @Column('int', { name: 'campaign_pet_min_donation_amount', nullable: true })
  campaignPetMinDonationAmount: number | null;

  @Column('tinyint', { name: 'max_wastage_percent', nullable: true })
  maxWastagePercent: number | null;

  @Column('tinyint', {
    name: 'preorder_new_mode_active',
    width: 1,
    default: () => "'0'",
  })
  preorderNewModeActive: number;

  @Column('int', {
    name: 'preorder_daily_limit',
    nullable: true,
    default: () => "'60'",
  })
  preorderDailyLimit: number | null;

  @Column('int', {
    name: 'preorder_wait_days',
    nullable: true,
    default: () => "'3'",
  })
  preorderWaitDays: number | null;

  @Column('int', {
    name: 'preorder_purchase_period_hours',
    nullable: true,
    default: () => "'72'",
  })
  preorderPurchasePeriodHours: number | null;

  @Column('int', {
    name: 'preorder_register_price',
    nullable: true,
    default: () => "'200000'",
  })
  preorderRegisterPrice: number | null;

  @Column('int', {
    name: 'delivery_duration_days',
    nullable: true,
    default: () => "'14'",
  })
  deliveryDurationDays: number | null;

  @Column('int', {
    name: 'preorder_notify_before_days',
    nullable: true,
    default: () => "'2'",
  })
  preorderNotifyBeforeDays: number | null;

  @Column('int', {
    name: 'preorder_notify_after_period_started_days',
    nullable: true,
    default: () => "'1'",
  })
  preorderNotifyAfterPeriodStartedDays: number | null;

  @Column('int', {
    name: 'preorder_notify_before_period_ends_days',
    nullable: true,
    default: () => "'1'",
  })
  preorderNotifyBeforePeriodEndsDays: number | null;

  @Column('text', {
    name: 'preorder_notify_before_started_text',
    nullable: true,
  })
  preorderNotifyBeforeStartedText: string | null;

  @Column('text', {
    name: 'preorder_notify_after_started_text',
    nullable: true,
  })
  preorderNotifyAfterStartedText: string | null;

  @Column('int', {
    name: 'preorder_notify_interval_hours',
    nullable: true,
    default: () => "'72'",
  })
  preorderNotifyIntervalHours: number | null;

  @Column('int', {
    name: 'preorder_fake_count_low',
    nullable: true,
    default: () => "'35'",
  })
  preorderFakeCountLow: number | null;

  @Column('int', {
    name: 'preorder_fake_multiply_by',
    nullable: true,
    default: () => "'5'",
  })
  preorderFakeMultiplyBy: number | null;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: number;

  @Column('int', { name: 'history_created_by', nullable: true, unsigned: true })
  historyCreatedBy: number | null;

  @Column('timestamp', { name: 'history_created_at', nullable: true })
  historyCreatedAt: Date | null;

  @Column('timestamp', { name: 'history_updated_at', nullable: true })
  historyUpdatedAt: Date | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
