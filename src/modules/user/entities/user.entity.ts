import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Address } from '@/modules/address/entities/address.entity';
import { AutomationEvent } from '@/modules/automation-event/entities/automation-event.entity';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/entities/basic-carpet-designer.entity';
import { CampaignGoldCoinSub } from '@/modules/campaign-gold-coin-sub/entities/campaign-gold-coin-sub.entity';
import { CampaignInstagramFollow } from '@/modules/campaign-instagram-follow/entities/campaign-instagram-follow.entity';
import { CampaignPetForm } from '@/modules/campaign-pet-form/entities/campaign-pet-form.entity';
import { CampaignRoomvoImage } from '@/modules/campaign-roomvo-image/entities/campaign-roomvo-image.entity';
import { CampaignRoomvoVote } from '@/modules/campaign-roomvo-vote/entities/campaign-roomvo-vote.entity';
import { CampaignSubscription } from '@/modules/campaign-subscription/entities/campaign-subscription.entity';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/entities/campaign-uefa-euro-subscriber-history.entity';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/entities/campaign-uefa-euro-subscriber.entity';
import { CampaignVotingImageUser } from '@/modules/campaign-voting-image-user/entities/campaign-voting-image-user.entity';
import { CarpetFeatureUser } from '@/modules/carpet-feature-user/entities/carpet-feature-user.entity';
import { CarpetUsagePlaceUser } from '@/modules/carpet-usage-place-user/entities/carpet-usage-place-user.entity';
import { ContactFormHistory } from '@/modules/contact-form-history/entities/contact-form-history.entity';
import { ContactForm } from '@/modules/contact-form/entities/contact-form.entity';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';
import { CustomerRequest } from '@/modules/customer-request/entities/customer-request.entity';
import { Design } from '@/modules/design/entities/design.entity';
import { DiscountNotification } from '@/modules/discount-notification/entities/discount-notification.entity';
import { Discount } from '@/modules/discount/entities/discount.entity';
import { ExitControl } from '@/modules/exit-control/entities/exit-control.entity';
import { FavoriteProduct } from '@/modules/favorite-product/entities/favorite-product.entity';
import { GoogleFormUtm } from '@/modules/google-form-utm/entities/google-form-utm.entity';
import { HelpDesk } from '@/modules/help-desk/entities/help-desk.entity';
import { ImpersonateHistory } from '@/modules/impersonate-history/entities/impersonate-history.entity';
import { IncredibleOfferSentNotification } from '@/modules/incredible-offer-sent-notification/entities/incredible-offer-sent-notification.entity';
import { InvoiceAddress } from '@/modules/invoice-address/entities/invoice-address.entity';
import { InvoiceHistory } from '@/modules/invoice-history/entities/invoice-history.entity';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/entities/invoice-invoice-status.entity';
import { InvoicePayment } from '@/modules/invoice-payment/entities/invoice-payment.entity';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/entities/invoice-product-item-invoice-product-status.entity';
import { InvoiceReversal } from '@/modules/invoice-reversal/entities/invoice-reversal.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ModelVisit } from '@/modules/model-visit/entities/model-visit.entity';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/entities/needs-photography-subproduct.entity';
import { NegotiationHistory } from '@/modules/negotiation-history/entities/negotiation-history.entity';
import { NegotiationStep } from '@/modules/negotiation-step/entities/negotiation-step.entity';
import { Negotiation } from '@/modules/negotiation/entities/negotiation.entity';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/entities/preorder-preorder-status.entity';
import { PreorderRegister } from '@/modules/preorder-register/entities/preorder-register.entity';
import { Preorder } from '@/modules/preorder/entities/preorder.entity';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { ProductCommentLike } from '@/modules/product-comment-like/entities/product-comment-like.entity';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { ProductLike } from '@/modules/product-like/entities/product-like.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/entities/production-pad-production-pad-status.entity';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/entities/retargeting-wallet-charge.entity';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/entities/return-item-status-return-request-item.entity';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/entities/return-request-item-return-item-status.entity';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/entities/return-request-return-status.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnedInvoice } from '@/modules/returned-invoice/entities/returned-invoice.entity';
import { RipTemplate } from '@/modules/rip-template/entities/rip-template.entity';
import { SocialFacebookAccount } from '@/modules/social-facebook-account/entities/social-facebook-account.entity';
import { SocialGoogleAccount } from '@/modules/social-google-account/entities/social-google-account.entity';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/entities/subproduct-stock-history.entity';
import { Transaction } from '@/modules/transaction/entities/transaction.entity';
import { UserCart } from '@/modules/user-cart/entities/user-cart.entity';
import { UserUtm } from '@/modules/user-utm/entities/user-utm.entity';
import { HeardAboutUsOption } from '@/modules/heard-about-us-option/entities/heard-about-us-option.entity';
import { InvitationCode } from '@/modules/invitation-code/entities/invitation-code.entity';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/entities/utm-google-form-coupon.entity';
import { VerifyUser } from '@/modules/verify-user/entities/verify-user.entity';
import { Visitor } from '@/modules/visitor/entities/visitor.entity';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/entities/wallet-gift-charge.entity';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';
import { WithdrawalRequest } from '@/modules/withdrawal-request/entities/withdrawal-request.entity';
import { PaymentRequest } from '@/modules/payment-request/entities/payment-request.entity';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';
import { Holiday } from '@/modules/holiday/entities/holiday.entity';
import { Activity } from '@/modules/activity/entities/activity.entity';
import { UserHasRole } from '@/modules/user-has-role/entities/user-has-role.entity';
import { UserHasPermission } from '@/modules/user-has-permission/entities/user-has-role.entity';
import { ProductionPadRoll } from '@/modules/production-pad-roll/entities/production-pad-roll.entity';

@Index(
  'campaign_finding_coupon_winner_place',
  ['campaignFindingCouponWinnerPlace'],
  {}
)
@Index('login_email', ['loginEmail'], { unique: true })
@Index('login_email_2', ['loginEmail'], { unique: true })
@Index('sepidar_id', ['sepidarId'], {})
@Index('users_api_token_unique', ['apiToken'], { unique: true })
@Index(
  'users_campaign_finding_coupon_used_index',
  ['campaignFindingCouponUsed'],
  {}
)
@Index('users_campain_id_index', ['campaignId'], {})
@Index('users_email_unique', ['email'], { unique: true })
@Index('users_heard_about_us_option_id_index', ['heardAboutUsOptionId'], {})
@Index('users_invitation_code_id_sindex', ['invitationCodeId'], {})
@Index('users_lottery_code_unique', ['lotteryCode'], { unique: true })
@Index('users_mah_index', ['mah'], {})
@Index('users_phone_verified_by_index', ['phoneVerifiedBy'], {})
@Index('users_preorder_register_date_index', ['preorderRegisterDate'], {})
@Index('users_roz_index', ['roz'], {})
@Index('users_sal_index', ['sal'], {})
@Index('users_spinner_verification_code_unique', ['spinnerVerificationCode'], {
  unique: true,
})
@Index('users_username_unique', ['username'], { unique: true })
@Entity('users', { schema: 'modema' })
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191, default: () => "''" })
  name: string;

  @Column('varchar', { name: 'family', length: 191, default: () => "''" })
  family: string;

  @Column('varchar', { name: 'phone', nullable: true, length: 191 })
  phone?: string;

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

  @Column('varchar', { name: 'os', nullable: true, length: 191 })
  os?: string;

  @Column('varchar', { name: 'os_version', nullable: true, length: 191 })
  osVersion?: string;

  @Column('varchar', {
    name: 'api_token',
    nullable: true,
    unique: true,
    length: 60,
  })
  apiToken?: string;

  @Column('varchar', { name: 'code', nullable: true, length: 191 })
  code?: string;

  @Column('tinyint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('varchar', {
    name: 'username',
    nullable: true,
    unique: true,
    length: 191,
  })
  username?: string;

  @Column('varchar', {
    name: 'email',
    nullable: true,
    unique: true,
    length: 191,
  })
  email?: string;

  @Column('varchar', {
    name: 'login_email',
    nullable: true,
    unique: true,
    length: 191,
  })
  loginEmail?: string;

  @Column('varchar', { name: 'password', nullable: true, length: 191 })
  password?: string;

  @Column('tinyint', {
    name: 'is_guest',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  isGuest?: number;

  @Column('tinyint', {
    name: 'is_active',
    nullable: true,
    unsigned: true,
    default: () => "'1'",
  })
  isActive?: number;

  @Column('varchar', { name: 'profile_picture', nullable: true, length: 767 })
  profilePicture?: string;

  @Column('varchar', { name: 'avatar', nullable: true, length: 191 })
  avatar?: string;

  @Column('varchar', { name: 'national_id', nullable: true, length: 191 })
  nationalId?: string;

  @Column('tinyint', { name: 'is_foreigner', width: 1, default: () => "'0'" })
  isForeigner: boolean;

  @Column('varchar', { name: 'atm_card_no', nullable: true, length: 191 })
  atmCardNo?: string;

  @Column('varchar', { name: 'stripe_id', nullable: true, length: 191 })
  stripeId?: string;

  @Column('tinyint', {
    name: 'email_verified',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  emailVerified?: number;

  @Column('tinyint', {
    name: 'phone_verified',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  phoneVerified?: number;

  @Column('varchar', { name: 'verification_code', nullable: true, length: 191 })
  verificationCode?: string;

  @Column('varchar', { name: 'remember_token', nullable: true, length: 100 })
  rememberToken?: string;

  @Column('int', { name: 'invitation_code_id', nullable: true, unsigned: true })
  invitationCodeId?: number;

  @Column('tinyint', {
    name: 'is_preorder_applicant',
    width: 1,
    default: () => "'0'",
  })
  isPreorderApplicant: boolean;

  @Column('varchar', {
    name: 'spinner_verification_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  spinnerVerificationCode?: string;

  @Column('tinyint', {
    name: 'spinner_verified',
    width: 1,
    default: () => "'0'",
  })
  spinnerVerified: boolean;

  @Column('tinyint', {
    name: 'spinner_is_used',
    width: 1,
    default: () => "'0'",
  })
  spinnerIsUsed: boolean;

  @Column('tinyint', {
    name: 'is_password_changed',
    width: 1,
    default: () => "'0'",
  })
  isPasswordChanged: boolean;

  @Column('tinyint', {
    name: 'retargeting_is_used',
    comment:
      'This field for old retargeting campaign in year: 2020 changed to -1 for users that used this campaign(and this field was = 1 for them, so that they can participate in 2023 campaign again(if no invoices was submitted for them)',
    width: 1,
    default: () => "'0'",
  })
  retargetingIsUsed: boolean;

  @Column('datetime', {
    name: 'monthly_retargeting_start_date',
    nullable: true,
  })
  monthlyRetargetingStartDate?: Date;

  @Column('tinyint', {
    name: 'children_coupon_is_used',
    width: 1,
    default: () => "'0'",
  })
  childrenCouponIsUsed: boolean;

  @Column('tinyint', {
    name: 'new_users_campaign_charged',
    width: 1,
    default: () => "'0'",
  })
  newUsersCampaignCharged: boolean;

  @Column('int', { name: 'campaign_id', nullable: true, unsigned: true })
  campaignId?: number;

  @Column('varchar', {
    name: 'campaign_finding_coupon_code',
    nullable: true,
    length: 191,
  })
  campaignFindingCouponCode?: string;

  @Column('varchar', {
    name: 'campaign_finding_coupon_hiding_place',
    nullable: true,
    length: 191,
  })
  campaignFindingCouponHidingPlace?: string;

  @Column('tinyint', {
    name: 'campaign_finding_coupon_used',
    width: 1,
    default: () => "'0'",
  })
  campaignFindingCouponUsed: boolean;

  @Column('varchar', {
    name: 'campaign_finding_coupon_found_parts',
    length: 191,
    default: () => "'0-0-0-0'",
  })
  campaignFindingCouponFoundParts: string;

  @Column('int', {
    name: 'campaign_finding_coupon_winner_place',
    nullable: true,
  })
  campaignFindingCouponWinnerPlace?: number;

  @Column('varchar', { name: 'temp', nullable: true, length: 191 })
  temp?: string;

  @Column('varchar', { name: 'temp_name', length: 191 })
  tempName: string;

  @Column('int', { name: 'sepidar_id', nullable: true })
  sepidarId?: number;

  @Column('int', { name: 'sepidar_code', nullable: true })
  sepidarCode?: number;

  @Column('int', {
    name: 'heard_about_us_option_id',
    nullable: true,
    unsigned: true,
  })
  heardAboutUsOptionId?: number;

  @Column('int', { name: 'phone_verified_by', nullable: true, unsigned: true })
  phoneVerifiedBy?: number;

  @Column('decimal', {
    name: 'comments_charged_amount',
    precision: 14,
    scale: 2,
    default: () => "'0.00'",
  })
  commentsChargedAmount: string;

  @Column('varchar', {
    name: 'campaign_cart_items',
    nullable: true,
    length: 191,
  })
  campaignCartItems?: string;

  @Column('datetime', {
    name: 'campaign_cart_items_start_date',
    nullable: true,
  })
  campaignCartItemsStartDate?: Date;

  @Column('varchar', {
    name: 'lottery_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  lotteryCode?: string;

  @Column('int', { name: 'hafez_poem_count', default: () => "'0'" })
  hafezPoemCount: number;

  @Column('tinyint', { name: 'preorder_paid', width: 1, default: () => "'0'" })
  preorderPaid: boolean;

  @Column('datetime', { name: 'preorder_register_date', nullable: true })
  preorderRegisterDate?: Date;

  @Column('date', { name: 'preorder_turn_start_date', nullable: true })
  preorderTurnStartDate?: string;

  @Column('date', { name: 'preorder_turn_end_date', nullable: true })
  preorderTurnEndDate?: string;

  @Column('smallint', { name: 'sal', nullable: true, unsigned: true })
  sal?: number;

  @Column('tinyint', { name: 'mah', nullable: true, unsigned: true })
  mah?: number;

  @Column('tinyint', { name: 'roz', nullable: true, unsigned: true })
  roz?: number;

  @Column('datetime', {
    name: 'discount_notification_sent_date',
    nullable: true,
  })
  discountNotificationSentDate?: Date;

  @OneToMany(() => Activity, (activity) => activity.user)
  activities: Activity[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => AutomationEvent, (automationEvent) => automationEvent.user)
  automationEvents: AutomationEvent[];

  @OneToMany(
    () => BasicCarpetDesigner,
    (basicCarpetDesigner) => basicCarpetDesigner.user
  )
  basicCarpetDesigners: BasicCarpetDesigner[];

  @OneToOne(
    () => CampaignGoldCoinSub,
    (campaignGoldCoinSub) => campaignGoldCoinSub.user
  )
  campaignGoldCoinSubs: CampaignGoldCoinSub;

  @OneToMany(
    () => CampaignInstagramFollow,
    (campaignInstagramFollow) => campaignInstagramFollow.user
  )
  campaignInstagramFollows: CampaignInstagramFollow[];

  @OneToMany(() => CampaignPetForm, (campaignPetForm) => campaignPetForm.user)
  campaignPetForms: CampaignPetForm[];

  @OneToMany(
    () => CampaignRoomvoImage,
    (campaignRoomvoImage) => campaignRoomvoImage.user
  )
  campaignRoomvoImages: CampaignRoomvoImage[];

  @OneToMany(
    () => CampaignRoomvoVote,
    (campaignRoomvoVote) => campaignRoomvoVote.user
  )
  campaignRoomvoVotes: CampaignRoomvoVote[];

  @OneToMany(
    () => CampaignSubscription,
    (campaignSubscription) => campaignSubscription.user
  )
  campaignSubscriptions: CampaignSubscription[];

  @OneToMany(
    () => CampaignUefaEuroSubscriberHistory,
    (campaignUefaEuroSubscriberHistory) =>
      campaignUefaEuroSubscriberHistory.user
  )
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @OneToMany(
    () => CampaignUefaEuroSubscriber,
    (campaignUefaEuroSubscriber) => campaignUefaEuroSubscriber.user
  )
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriber[];

  @OneToMany(
    () => CampaignVotingImageUser,
    (campaignVotingImageUser) => campaignVotingImageUser.user
  )
  campaignVotingImageUsers: CampaignVotingImageUser[];

  @OneToMany(
    () => CarpetFeatureUser,
    (carpetFeatureUser) => carpetFeatureUser.user
  )
  carpetFeatureUsers?: CarpetFeatureUser[];

  @OneToMany(
    () => CarpetUsagePlaceUser,
    (carpetUsagePlaceUser) => carpetUsagePlaceUser.user
  )
  carpetUsagePlaceUsers?: CarpetUsagePlaceUser[];

  @OneToMany(
    () => ContactFormHistory,
    (contactFormHistory) => contactFormHistory.user
  )
  contactFormHistories?: ContactFormHistory[];

  @OneToMany(() => ContactForm, (contactForm) => contactForm.user)
  contactForms?: ContactForm[];

  @OneToMany(() => Coupon, (coupon) => coupon.createdBy2)
  coupons?: Coupon[];

  @OneToMany(() => Coupon, (coupon) => coupon.retargetingUser)
  coupons2?: Coupon[];

  @OneToMany(() => Coupon, (coupon) => coupon.updatedBy2)
  coupons3?: Coupon[];

  @OneToMany(() => Coupon, (coupon) => coupon.user)
  coupons4?: Coupon[];

  @OneToMany(() => CustomerRequest, (customerRequest) => customerRequest.user)
  customerRequests?: CustomerRequest[];

  @OneToMany(() => Design, (design) => design.user)
  designs?: Design[];

  @OneToMany(
    () => DiscountNotification,
    (discountNotification) => discountNotification.user
  )
  discountNotifications?: DiscountNotification[];

  @OneToMany(() => Discount, (discount) => discount.createdBy2)
  discounts?: Discount[];

  @OneToMany(() => Discount, (discount) => discount.updatedBy2)
  discounts2?: Discount[];

  @OneToMany(() => ExitControl, (exitControl) => exitControl.user)
  exitControls?: ExitControl[];

  @OneToMany(() => FavoriteProduct, (favoriteProduct) => favoriteProduct.user)
  favoriteProducts?: FavoriteProduct[];

  @OneToMany(() => GoogleFormUtm, (googleFormUtm) => googleFormUtm.user)
  googleFormUtms?: GoogleFormUtm[];

  @OneToOne(() => HelpDesk, (helpDesk) => helpDesk.user)
  helpDesks?: HelpDesk;

  @OneToMany(() => Holiday, (holiday) => holiday.user)
  holidays?: Holiday[];

  @OneToMany(
    () => ImpersonateHistory,
    (impersonateHistory) => impersonateHistory.impersonateUser
  )
  impersonateHistories?: ImpersonateHistory[];

  @OneToMany(
    () => ImpersonateHistory,
    (impersonateHistory) => impersonateHistory.user
  )
  impersonateHistories2?: ImpersonateHistory[];

  @OneToMany(
    () => IncredibleOfferSentNotification,
    (incredibleOfferSentNotification) => incredibleOfferSentNotification.user
  )
  incredibleOfferSentNotifications?: IncredibleOfferSentNotification[];

  @OneToMany(() => InvoiceAddress, (invoiceAddress) => invoiceAddress.user)
  invoiceAddresses?: InvoiceAddress[];

  @OneToMany(
    () => InvoiceHistory,
    (invoiceHistory) => invoiceHistory.editorUser
  )
  invoiceHistories?: InvoiceHistory[];

  @OneToMany(
    () => InvoiceInvoiceStatus,
    (invoiceInvoiceStatus) => invoiceInvoiceStatus.user
  )
  invoiceInvoiceStatuses?: InvoiceInvoiceStatus[];

  @OneToMany(
    () => InvoicePaymentHistory,
    (invoicePaymentHistory) => invoicePaymentHistory.confirmedBy2
  )
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @OneToMany(
    () => InvoicePaymentHistory,
    (invoicePaymentHistory) => invoicePaymentHistory.user
  )
  invoicePaymentHistories2?: InvoicePaymentHistory[];

  @OneToMany(
    () => InvoicePayment,
    (invoicePayment) => invoicePayment.confirmedBy2
  )
  invoicePayments?: InvoicePayment[];

  @OneToMany(() => InvoicePayment, (invoicePayment) => invoicePayment.user)
  invoicePayments2?: InvoicePayment[];

  @OneToMany(
    () => InvoiceProductItemInvoiceProductStatus,
    (invoiceProductItemInvoiceProductStatus) =>
      invoiceProductItemInvoiceProductStatus.user
  )
  invoiceProductItemInvoiceProductStatuses?: InvoiceProductItemInvoiceProductStatus[];

  @OneToMany(
    () => InvoiceReversal,
    (invoiceReversal) => invoiceReversal.reviewedBy2
  )
  invoiceReversals?: InvoiceReversal[];

  @OneToMany(() => Invoice, (invoice) => invoice.moneyTransferConfirmedBy2)
  invoices?: Invoice[];

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices2?: Invoice[];

  @OneToMany(() => ModelVisit, (modelVisit) => modelVisit.user)
  modelVisits?: ModelVisit[];

  @OneToMany(
    () => NeedsPhotographySubproduct,
    (needsPhotographySubproduct) => needsPhotographySubproduct.announcedUser
  )
  needsPhotographySubproducts?: NeedsPhotographySubproduct[];

  @OneToMany(
    () => NeedsPhotographySubproduct,
    (needsPhotographySubproduct) => needsPhotographySubproduct.photographyUser
  )
  needsPhotographySubproducts2?: NeedsPhotographySubproduct[];

  @OneToMany(
    () => NegotiationHistory,
    (negotiationHistory) => negotiationHistory.newNegotiator
  )
  negotiationHistories?: NegotiationHistory[];

  @OneToMany(
    () => NegotiationHistory,
    (negotiationHistory) => negotiationHistory.oldNegotiator
  )
  negotiationHistories2?: NegotiationHistory[];

  @OneToMany(
    () => NegotiationHistory,
    (negotiationHistory) => negotiationHistory.submittedBy2
  )
  negotiationHistories3?: NegotiationHistory[];

  @OneToMany(
    () => NegotiationStep,
    (negotiationStep) => negotiationStep.submittedBy2
  )
  negotiationSteps?: NegotiationStep[];

  @OneToMany(() => Negotiation, (negotiation) => negotiation.negotiator)
  negotiations?: Negotiation[];

  @OneToMany(() => Negotiation, (negotiation) => negotiation.submittedBy2)
  negotiations2?: Negotiation[];

  @OneToMany(() => PaymentRequest, (paymentRequest) => paymentRequest.adminUser)
  paymentRequests?: PaymentRequest[];

  @OneToMany(
    () => PreorderPreorderStatus,
    (preorderPreorderStatus) => preorderPreorderStatus.user
  )
  preorderPreorderStatuses?: PreorderPreorderStatus[];

  @OneToMany(
    () => PreorderRegister,
    (preorderRegister) => preorderRegister.moneyTransferConfirmedBy2
  )
  preorderRegisters?: PreorderRegister[];

  @OneToMany(
    () => PreorderRegister,
    (preorderRegisters) => preorderRegisters.user
  )
  preorderRegisters2?: PreorderRegister[];

  @OneToMany(() => Preorder, (preorder) => preorder.assignedUser)
  preorders?: Preorder[];

  @OneToMany(() => Preorder, (preorder) => preorder.salesPerson)
  preorders2?: Preorder[];

  @OneToMany(() => Preorder, (preorder) => preorder.user)
  preorders3?: Preorder[];

  @OneToMany(() => PrintProfile, (printProfile) => printProfile.createdBy2)
  printProfiles?: PrintProfile[];

  @OneToMany(() => PrintProfile, (printProfile) => printProfile.updatedBy2)
  printProfiles2?: PrintProfile[];

  @OneToMany(() => PrintRip, (printRip) => printRip.user)
  printRips?: PrintRip[];

  @OneToMany(
    () => ProductCommentLike,
    (productCommentLike) => productCommentLike.user
  )
  productCommentLikes?: ProductCommentLike[];

  @OneToMany(
    () => ProductComment,
    (productComment) => productComment.approvedBy2
  )
  productComments?: ProductComment[];

  @OneToMany(() => ProductComment, (productComment) => productComment.user)
  productComments2?: ProductComment[];

  @OneToMany(() => ProductLike, (productLike) => productLike.user)
  productLikes?: ProductLike[];

  @OneToMany(() => ProductRate, (productRate) => productRate.user)
  productRates?: ProductRate[];

  @OneToMany(
    () => ProductionPadProductionPadStatus,
    (productionPadProductionPadStatus) => productionPadProductionPadStatus.user
  )
  productionPadProductionPadStatuses?: ProductionPadProductionPadStatus[];

  @OneToMany(() => ProductionRoll, (productionRoll) => productionRoll.closedBy2)
  productionRolls?: ProductionRoll[];

  @OneToMany(
    () => ProductionRoll,
    (productionRolls) => productionRolls.createdBy2
  )
  productionRolls2?: ProductionRoll[];

  @OneToMany(
    () => RetargetingWalletCharge,
    (retargetingWalletCharge) => retargetingWalletCharge.user
  )
  retargetingWalletCharges?: RetargetingWalletCharge[];

  @OneToMany(
    () => ReturnItemStatusReturnRequestItem,
    (returnItemStatusReturnRequestItem) =>
      returnItemStatusReturnRequestItem.user
  )
  returnItemStatusReturnRequestItems?: ReturnItemStatusReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.user
  )
  returnRequestAddresses?: ReturnRequestAddress[];

  @OneToMany(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.editorUser
  )
  returnRequestHistories?: ReturnRequestHistory[];

  @OneToMany(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.user
  )
  returnRequestHistories2?: ReturnRequestHistory[];

  @OneToMany(
    () => ReturnRequestItemReturnItemStatus,
    (returnRequestItemReturnItemStatus) =>
      returnRequestItemReturnItemStatus.user
  )
  returnRequestItemReturnItemStatuses?: ReturnRequestItemReturnItemStatus[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.user
  )
  returnRequestReturnStatuses?: ReturnRequestReturnStatus[];

  @OneToMany(() => ReturnRequest, (returnRequest) => returnRequest.user)
  returnRequests?: ReturnRequest[];

  @OneToMany(() => ReturnedInvoice, (returnedInvoice) => returnedInvoice.user)
  returnedInvoices?: ReturnedInvoice[];

  @OneToMany(() => RipTemplate, (ripTemplate) => ripTemplate.user)
  ripTemplates?: RipTemplate[];

  @OneToMany(
    () => SocialFacebookAccount,
    (socialFacebookAccount) => socialFacebookAccount.user
  )
  socialFacebookAccounts?: SocialFacebookAccount[];

  @OneToMany(
    () => SocialGoogleAccount,
    (socialGoogleAccount) => socialGoogleAccount.user
  )
  socialGoogleAccounts?: SocialGoogleAccount[];

  @OneToMany(
    () => SubproductStockHistory,
    (subproductStockHistory) => subproductStockHistory.user
  )
  subproductStockHistories?: SubproductStockHistory[];

  @OneToMany(() => Transaction, (transaction) => transaction.approvedBy2)
  transactions?: Transaction[];

  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions2?: Transaction[];

  @OneToMany(() => UserCart, (userCart) => userCart.user)
  userCarts?: UserCart[];

  @OneToMany(() => UserUtm, (userUtm) => userUtm.user)
  userUtms?: UserUtm[];

  @ManyToOne(
    () => HeardAboutUsOption,
    (heardAboutUsOption) => heardAboutUsOption.users,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }
  )
  @JoinColumn([
    { name: 'heard_about_us_option_id', referencedColumnName: 'id' },
  ])
  heardAboutUsOption?: HeardAboutUsOption;

  @ManyToOne(() => InvitationCode, (invitationCode) => invitationCode.users, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invitation_code_id', referencedColumnName: 'id' }])
  invitationCode?: InvitationCode;

  @ManyToOne(() => User, (user) => user.users, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'phone_verified_by', referencedColumnName: 'id' }])
  phoneVerifiedBy2?: User;

  @OneToMany(() => User, (users) => users.phoneVerifiedBy2)
  users?: User[];

  @OneToMany(
    () => UtmGoogleFormCoupon,
    (utmGoogleFormCoupon) => utmGoogleFormCoupon.user
  )
  utmGoogleFormCoupons?: UtmGoogleFormCoupon[];

  @OneToMany(() => VerifyUser, (verifyUser) => verifyUser.user)
  verifyUsers?: VerifyUser[];

  @OneToMany(() => Visitor, (visitor) => visitor.user)
  visitors?: Visitor[];

  @OneToMany(
    () => WalletGiftCharge,
    (walletGiftCharge) => walletGiftCharge.user
  )
  walletGiftCharges?: WalletGiftCharge[];

  @OneToMany(() => WalletHistory, (walletHistory) => walletHistory.createdBy2)
  walletHistories?: WalletHistory[];

  @OneToOne(() => Wallet, (wallet) => wallet.user)
  wallets?: Wallet;

  @OneToMany(
    () => WithdrawalRequest,
    (withdrawalRequest) => withdrawalRequest.confirmedBy2
  )
  withdrawalRequests?: WithdrawalRequest[];

  @OneToMany(
    () => WithdrawalRequest,
    (withdrawalRequest) => withdrawalRequest.user
  )
  withdrawalRequests2?: WithdrawalRequest[];

  @OneToMany(() => UserHasRole, (userHasRole) => userHasRole.user)
  userHasRole: UserHasRole[];

  @OneToMany(
    () => UserHasPermission,
    (userHasPermission) => userHasPermission.user
  )
  userHasPermission: UserHasPermission[];

  @OneToMany(
    () => ProductionPadRoll,
    (productionPadRoll) => productionPadRoll.closedBy2
  )
  productionPadRolls: ProductionPadRoll[];

  @OneToMany(
    () => ProductionPadRoll,
    (productionPadRolls) => productionPadRolls.createdBy2
  )
  productionPadRolls2: ProductionPadRoll[];
}
