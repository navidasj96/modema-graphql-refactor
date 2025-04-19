import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { Address } from '@/modules/address/domain/address';
import { AutomationEvent } from '@/modules/automation-event/domain/automation-event';
import { BasicCarpetDesigner } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer';
import { CampaignGoldCoinSub } from '@/modules/campaign-gold-coin-sub/domain/campaign-gold-coin-sub';
import { CampaignInstagramFollow } from '@/modules/campaign-instagram-follow/domain/campaign-instagram-follow';
import { CampaignPetForm } from '@/modules/campaign-pet-form/domain/campaign-pet-form';
import { CampaignRoomvoImage } from '@/modules/campaign-roomvo-image/domain/campaign-roomvo-image';
import { CampaignRoomvoVote } from '@/modules/campaign-roomvo-vote/domain/campaign-roomvo-vote';
import { CampaignSubscription } from '@/modules/campaign-subscription/domain/campaign-subscription';
import { CampaignUefaEuroSubscriberHistory } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history';
import { CampaignUefaEuroSubscriber } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber';
import { CampaignVotingImageUser } from '@/modules/campaign-voting-image-user/domain/campaign-voting-image-user';
import { CarpetFeatureUser } from '@/modules/carpet-feature-user/domain/carpet-feature-user';
import { CarpetUsagePlaceUser } from '@/modules/carpet-usage-place-user/domain/carpet-usage-place-user';
import { ContactFormHistory } from '@/modules/contact-form-history/domain/contact-form-history';
import { ContactForm } from '@/modules/contact-form/domain/contact-form';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { CustomerRequest } from '@/modules/customer-request/domain/customer-request';
import { Design } from '@/modules/design/domain/design';
import { DiscountNotification } from '@/modules/discount-notification/domain/discount-notification';
import { Discount } from '@/modules/discount/domain/discount';
import { ExitControl } from '@/modules/exit-control/domain/exit-control';
import { FavoriteProduct } from '@/modules/favorite-product/domain/favorite-product';
import { GoogleFormUtm } from '@/modules/google-form-utm/domain/google-form-utm';
import { HelpDesk } from '@/modules/help-desk/domain/help-desk';
import { ImpersonateHistory } from '@/modules/impersonate-history/domain/impersonate-history';
import { IncredibleOfferSentNotification } from '@/modules/incredible-offer-sent-notification/domain/incredible-offer-sent-notification';
import { InvoiceAddress } from '@/modules/invoice-address/domain/invoice-address';
import { InvoiceHistory } from '@/modules/invoice-history/domain/invoice-history';
import { InvoiceInvoiceStatus } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status';
import { InvoicePayment } from '@/modules/invoice-payment/domain/invoice-payment';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { InvoiceReversal } from '@/modules/invoice-reversal/domain/invoice-reversal';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ModelVisit } from '@/modules/model-visit/domain/model-visit';
import { NeedsPhotographySubproduct } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';
import { NegotiationStep } from '@/modules/negotiation-step/domain/negotiation-step';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { PreorderPreorderStatus } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status';
import { PreorderRegister } from '@/modules/preorder-register/domain/preorder-register';
import { Preorder } from '@/modules/preorder/domain/preorder';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { ProductCommentLike } from '@/modules/product-comment-like/domain/product-comment-like';
import { ProductComment } from '@/modules/product-comment/domain/product-comment';
import { ProductLike } from '@/modules/product-like/domain/product-like';
import { ProductRate } from '@/modules/product-rate/domain/product-rate';
import { ProductionPadProductionPadStatus } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge';
import { ReturnItemStatusReturnRequestItem } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item';
import { ReturnRequestAddress } from '@/modules/return-request-address/domain/return-request-address';
import { ReturnRequestHistory } from '@/modules/return-request-history/domain/return-request-history';
import { ReturnRequestItemReturnItemStatus } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/domain/return-request-return-status';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { ReturnedInvoice } from '@/modules/returned-invoice/domain/returned-invoice';
import { RipTemplate } from '@/modules/rip-template/domain/rip-template';
import { SocialFacebookAccount } from '@/modules/social-facebook-account/domain/social-facebook-account';
import { SocialGoogleAccount } from '@/modules/social-google-account/domain/social-google-account';
import { SubproductStockHistory } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history';
import { Transaction } from '@/modules/transaction/domain/transaction';
import { UserCart } from '@/modules/user-cart/domain/user-cart';
import { UserUtm } from '@/modules/user-utm/domain/user-utm';
import { HeardAboutUsOption } from '@/modules/heard-about-us-option/domain/heard-about-us-option';
import { InvitationCode } from '@/modules/invitation-code/domain/invitation-code';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon';
import { VerifyUser } from '@/modules/verify-user/domain/verify-user';
import { Visitor } from '@/modules/visitor/domain/visitor';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge';
import { WalletHistory } from '@/modules/wallet-history/domain/wallet-history';
import { Wallet } from '@/modules/wallet/domain/wallet';
import { WithdrawalRequest } from '@/modules/withdrawal-request/domain/withdrawal-request';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/domain/invoice-payment-history';
import { Holiday } from '@/modules/holiday/domain/holiday';
import { PaymentRequest } from '@/modules/payment-request/domain/payment-request';
import { Activity } from '@/modules/activity/domain/activity';
import { UserHasRole } from '@/modules/user-has-role/domain/user-has-role';
import { UserHasPermission } from '@/modules/user-has-permission/domain/user-has-role';

@InputType('UserDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
})
@UnPagedRelation('userHasRole', () => UserHasRole)
@UnPagedRelation('userHasPermission', () => UserHasPermission)
@UnPagedRelation('wallets', () => Wallet)
@UnPagedRelation('walletHistories', () => WalletHistory)
@ObjectType()
export class User {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  name: string;

  @Field()
  family: string;

  @FilterableField({ nullable: true })
  phone?: string;

  @FilterableField({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  os?: string;

  @Field({ nullable: true })
  osVersion?: string;

  @Field({ nullable: true })
  apiToken?: string;

  @Field({ nullable: true })
  code?: string;

  @Field()
  status: number;

  @FilterableField({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  loginEmail?: string;

  @Field({ nullable: true })
  password?: string;

  @FilterableField({ nullable: true })
  isGuest?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  profilePicture?: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  nationalId?: string;

  @Field()
  isForeigner: boolean;

  @Field({ nullable: true })
  atmCardNo?: string;

  @Field({ nullable: true })
  stripeId?: string;

  @Field({ nullable: true })
  emailVerified?: number;

  @Field({ nullable: true })
  phoneVerified?: number;

  @Field({ nullable: true })
  verificationCode?: string;

  @Field({ nullable: true })
  rememberToken?: string;

  @Field({ nullable: true })
  invitationCodeId?: number;

  @Field()
  isPreorderApplicant: boolean;

  @Field({ nullable: true })
  spinnerVerificationCode?: string;

  @Field()
  spinnerVerified: boolean;

  @Field()
  spinnerIsUsed: boolean;

  @Field()
  isPasswordChanged: boolean;

  @Field()
  retargetingIsUsed: boolean;

  @Field({ nullable: true })
  monthlyRetargetingStartDate?: Date;

  @Field()
  childrenCouponIsUsed: boolean;

  @Field()
  newUsersCampaignCharged: boolean;

  @Field({ nullable: true })
  campaignId?: number;

  @Field({ nullable: true })
  campaignFindingCouponCode?: string;

  @Field({ nullable: true })
  campaignFindingCouponHidingPlace?: string;

  @Field()
  campaignFindingCouponUsed: boolean;

  @Field()
  campaignFindingCouponFoundParts: string;

  @Field({ nullable: true })
  campaignFindingCouponWinnerPlace?: number;

  @Field({ nullable: true })
  temp?: string;

  @Field()
  tempName: string;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field({ nullable: true })
  sepidarCode?: number;

  @Field({ nullable: true })
  heardAboutUsOptionId?: number;

  @Field({ nullable: true })
  phoneVerifiedBy?: number;

  @Field()
  commentsChargedAmount: string;

  @Field({ nullable: true })
  campaignCartItems?: string;

  @Field({ nullable: true })
  campaignCartItemsStartDate?: Date;

  @Field({ nullable: true })
  lotteryCode?: string;

  @Field()
  hafezPoemCount: number;

  @Field()
  preorderPaid: boolean;

  @Field({ nullable: true })
  preorderRegisterDate?: Date;

  @Field({ nullable: true })
  preorderTurnStartDate?: string;

  @Field({ nullable: true })
  preorderTurnEndDate?: string;

  @Field({ nullable: true })
  sal?: number;

  @Field({ nullable: true })
  mah?: number;

  @Field({ nullable: true })
  roz?: number;

  @Field({ nullable: true })
  discountNotificationSentDate?: Date;

  @Field(() => [Activity])
  activities: Activity[];

  @Field(() => [Address])
  addresses: Address[];

  @Field(() => [AutomationEvent])
  automationEvents: AutomationEvent[];

  @Field(() => [BasicCarpetDesigner])
  basicCarpetDesigners: BasicCarpetDesigner[];

  @Field(() => CampaignGoldCoinSub)
  campaignGoldCoinSubs: CampaignGoldCoinSub;

  @Field(() => [CampaignInstagramFollow])
  campaignInstagramFollows: CampaignInstagramFollow[];

  @Field(() => [CampaignPetForm])
  campaignPetForms: CampaignPetForm[];

  @Field(() => [CampaignRoomvoImage])
  campaignRoomvoImages: CampaignRoomvoImage[];

  @Field(() => [CampaignRoomvoVote])
  campaignRoomvoVotes: CampaignRoomvoVote[];

  @Field(() => [CampaignSubscription])
  campaignSubscriptions: CampaignSubscription[];

  @Field(() => [CampaignUefaEuroSubscriberHistory])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistory[];

  @Field(() => [CampaignUefaEuroSubscriber])
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriber[];

  @Field(() => [CampaignVotingImageUser])
  campaignVotingImageUsers: CampaignVotingImageUser[];

  @Field(() => [CarpetFeatureUser], { nullable: true })
  carpetFeatureUsers?: CarpetFeatureUser[];

  @Field(() => [CarpetUsagePlaceUser], { nullable: true })
  carpetUsagePlaceUsers?: CarpetUsagePlaceUser[];

  @Field(() => [ContactFormHistory], { nullable: true })
  contactFormHistories?: ContactFormHistory[];

  @Field(() => [ContactForm], { nullable: true })
  contactForms?: ContactForm[];

  @Field(() => [Coupon], { nullable: true })
  coupons?: Coupon[];

  @Field(() => [Coupon], { nullable: true })
  coupons2?: Coupon[];

  @Field(() => [Coupon], { nullable: true })
  coupons3?: Coupon[];

  @Field(() => [Coupon], { nullable: true })
  coupons4?: Coupon[];

  @Field(() => [CustomerRequest], { nullable: true })
  customerRequests?: CustomerRequest[];

  @Field(() => [Design], { nullable: true })
  designs?: Design[];

  @Field(() => [DiscountNotification], { nullable: true })
  discountNotifications?: DiscountNotification[];

  @Field(() => [Discount], { nullable: true })
  discounts?: Discount[];

  @Field(() => [Discount], { nullable: true })
  discounts2?: Discount[];

  @Field(() => [ExitControl], { nullable: true })
  exitControls?: ExitControl[];

  @Field(() => [FavoriteProduct], { nullable: true })
  favoriteProducts?: FavoriteProduct[];

  @Field(() => [GoogleFormUtm], { nullable: true })
  googleFormUtms?: GoogleFormUtm[];

  @Field(() => HelpDesk, { nullable: true })
  helpDesks?: HelpDesk;

  @Field(() => [Holiday], { nullable: true })
  holidays?: Holiday[];

  @Field(() => [ImpersonateHistory], { nullable: true })
  impersonateHistories?: ImpersonateHistory[];

  @Field(() => [ImpersonateHistory], { nullable: true })
  impersonateHistories2?: ImpersonateHistory[];

  @Field(() => [IncredibleOfferSentNotification], { nullable: true })
  incredibleOfferSentNotifications?: IncredibleOfferSentNotification[];

  @Field(() => [InvoiceAddress], { nullable: true })
  invoiceAddresses?: InvoiceAddress[];

  @Field(() => [InvoiceHistory], { nullable: true })
  invoiceHistories?: InvoiceHistory[];

  @Field(() => [InvoiceInvoiceStatus], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatus[];

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistory[];

  @Field(() => [InvoicePaymentHistory], { nullable: true })
  invoicePaymentHistories2?: InvoicePaymentHistory[];

  @Field(() => [InvoicePayment], { nullable: true })
  invoicePayments?: InvoicePayment[];

  @Field(() => [InvoicePayment], { nullable: true })
  invoicePayments2?: InvoicePayment[];

  @Field(() => [InvoiceProductItemInvoiceProductStatus], { nullable: true })
  invoiceProductItemInvoiceProductStatuses?: InvoiceProductItemInvoiceProductStatus[];

  @Field(() => [InvoiceReversal], { nullable: true })
  invoiceReversals?: InvoiceReversal[];

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => [Invoice], { nullable: true })
  invoices2?: Invoice[];

  @Field(() => [ModelVisit], { nullable: true })
  modelVisits?: ModelVisit[];

  @Field(() => [NeedsPhotographySubproduct], { nullable: true })
  needsPhotographySubproducts?: NeedsPhotographySubproduct[];

  @Field(() => [NeedsPhotographySubproduct], { nullable: true })
  needsPhotographySubproducts2?: NeedsPhotographySubproduct[];

  @Field(() => [NegotiationHistory], { nullable: true })
  negotiationHistories?: NegotiationHistory[];

  @Field(() => [NegotiationHistory], { nullable: true })
  negotiationHistories2?: NegotiationHistory[];

  @Field(() => [NegotiationHistory], { nullable: true })
  negotiationHistories3?: NegotiationHistory[];

  @Field(() => [NegotiationStep], { nullable: true })
  negotiationSteps?: NegotiationStep[];

  @Field(() => [Negotiation], { nullable: true })
  negotiations?: Negotiation[];

  @Field(() => [Negotiation], { nullable: true })
  negotiations2?: Negotiation[];

  @Field(() => [PaymentRequest], { nullable: true })
  paymentRequests?: PaymentRequest[];

  @Field(() => [PreorderPreorderStatus], { nullable: true })
  preorderPreorderStatuses?: PreorderPreorderStatus[];

  @Field(() => [PreorderRegister], { nullable: true })
  preorderRegisters?: PreorderRegister[];

  @Field(() => [PreorderRegister], { nullable: true })
  preorderRegisters2?: PreorderRegister[];

  @Field(() => [Preorder], { nullable: true })
  preorders?: Preorder[];

  @Field(() => [Preorder], { nullable: true })
  preorders2?: Preorder[];

  @Field(() => [Preorder], { nullable: true })
  preorders3?: Preorder[];

  @Field(() => [PrintProfile], { nullable: true })
  printProfiles?: PrintProfile[];

  @Field(() => [PrintProfile], { nullable: true })
  printProfiles2?: PrintProfile[];

  @Field(() => [PrintRip], { nullable: true })
  printRips?: PrintRip[];

  @Field(() => [ProductCommentLike], { nullable: true })
  productCommentLikes?: ProductCommentLike[];

  @Field(() => [ProductComment], { nullable: true })
  productComments?: ProductComment[];

  @Field(() => [ProductComment], { nullable: true })
  productComments2?: ProductComment[];

  @Field(() => [ProductLike], { nullable: true })
  productLikes?: ProductLike[];

  @Field(() => [ProductRate], { nullable: true })
  productRates?: ProductRate[];

  @Field(() => [ProductionPadProductionPadStatus], { nullable: true })
  productionPadProductionPadStatuses?: ProductionPadProductionPadStatus[];

  @Field(() => [ProductionRoll], { nullable: true })
  productionRolls?: ProductionRoll[];

  @Field(() => [ProductionRoll], { nullable: true })
  productionRolls2?: ProductionRoll[];

  @Field(() => [RetargetingWalletCharge], { nullable: true })
  retargetingWalletCharges?: RetargetingWalletCharge[];

  @Field(() => [ReturnItemStatusReturnRequestItem], { nullable: true })
  returnItemStatusReturnRequestItems?: ReturnItemStatusReturnRequestItem[];

  @Field(() => [ReturnRequestAddress], { nullable: true })
  returnRequestAddresses?: ReturnRequestAddress[];

  @Field(() => [ReturnRequestHistory], { nullable: true })
  returnRequestHistories?: ReturnRequestHistory[];

  @Field(() => [ReturnRequestHistory], { nullable: true })
  returnRequestHistories2?: ReturnRequestHistory[];

  @Field(() => [ReturnRequestItemReturnItemStatus], { nullable: true })
  returnRequestItemReturnItemStatuses?: ReturnRequestItemReturnItemStatus[];

  @Field(() => [ReturnRequestReturnStatus], { nullable: true })
  returnRequestReturnStatuses?: ReturnRequestReturnStatus[];

  @Field(() => [ReturnRequest], { nullable: true })
  returnRequests?: ReturnRequest[];

  @Field(() => [ReturnedInvoice], { nullable: true })
  returnedInvoices?: ReturnedInvoice[];

  @Field(() => [RipTemplate], { nullable: true })
  ripTemplates?: RipTemplate[];

  @Field(() => [SocialFacebookAccount], { nullable: true })
  socialFacebookAccounts?: SocialFacebookAccount[];

  @Field(() => [SocialGoogleAccount], { nullable: true })
  socialGoogleAccounts?: SocialGoogleAccount[];

  @Field(() => [SubproductStockHistory], { nullable: true })
  subproductStockHistories?: SubproductStockHistory[];

  @Field(() => [Transaction], { nullable: true })
  transactions?: Transaction[];

  @Field(() => [Transaction], { nullable: true })
  transactions2?: Transaction[];

  @Field(() => [UserCart], { nullable: true })
  userCarts?: UserCart[];

  @Field(() => [UserUtm], { nullable: true })
  userUtms?: UserUtm[];

  @Field(() => HeardAboutUsOption, { nullable: true })
  heardAboutUsOption?: HeardAboutUsOption;

  @Field(() => InvitationCode, { nullable: true })
  invitationCode?: InvitationCode;

  @Field(() => User, { nullable: true })
  phoneVerifiedBy2?: User;

  @Field(() => [User], { nullable: true })
  users?: User[];

  @Field(() => [UtmGoogleFormCoupon], { nullable: true })
  utmGoogleFormCoupons?: UtmGoogleFormCoupon[];

  @Field(() => [VerifyUser], { nullable: true })
  verifyUsers?: VerifyUser[];

  @Field(() => [Visitor], { nullable: true })
  visitors?: Visitor[];

  @Field(() => [WalletGiftCharge], { nullable: true })
  walletGiftCharges?: WalletGiftCharge[];

  @Field(() => [WalletHistory], { nullable: true })
  walletHistories?: WalletHistory[];

  @Field(() => Wallet, { nullable: true })
  wallets?: Wallet;

  @Field(() => [WithdrawalRequest], { nullable: true })
  withdrawalRequests?: WithdrawalRequest[];

  @Field(() => [WithdrawalRequest], { nullable: true })
  withdrawalRequests2?: WithdrawalRequest[];

  @Field(() => [UserHasRole])
  userHasRole: UserHasRole[];

  @Field(() => [UserHasPermission])
  userHasPermission: UserHasPermission[];
}
