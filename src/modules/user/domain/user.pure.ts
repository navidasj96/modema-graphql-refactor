import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { ActivityPure } from '@/modules/activity/domain/activity.pure';
import { AddressPure } from '@/modules/address/domain/address.pure';
import { AutomationEventPure } from '@/modules/automation-event/domain/automation-event.pure';
import { BasicCarpetDesignerPure } from '@/modules/basic-carpet-designer/domain/basic-carpet-designer.pure';
import { CampaignGoldCoinSubPure } from '@/modules/campaign-gold-coin-sub/domain/campaign-gold-coin-sub.pure';
import { CampaignInstagramFollowPure } from '@/modules/campaign-instagram-follow/domain/campaign-instagram-follow.pure';
import { CampaignPetFormPure } from '@/modules/campaign-pet-form/domain/campaign-pet-form.pure';
import { CampaignRoomvoImagePure } from '@/modules/campaign-roomvo-image/domain/campaign-roomvo-image.pure';
import { CampaignRoomvoVotePure } from '@/modules/campaign-roomvo-vote/domain/campaign-roomvo-vote.pure';
import { CampaignSubscriptionPure } from '@/modules/campaign-subscription/domain/campaign-subscription.pure';
import { CampaignUefaEuroSubscriberHistoryPure } from '@/modules/campaign-uefa-euro-subscriber-history/domain/campaign-uefa-euro-subscriber-history.pure';
import { CampaignUefaEuroSubscriberPure } from '@/modules/campaign-uefa-euro-subscriber/domain/campaign-uefa-euro-subscriber.pure';
import { CampaignVotingImageUserPure } from '@/modules/campaign-voting-image-user/domain/campaign-voting-image-user.pure';
import { CarpetFeatureUserPure } from '@/modules/carpet-feature-user/domain/carpet-feature-user.pure';
import { CarpetUsagePlaceUserPure } from '@/modules/carpet-usage-place-user/domain/carpet-usage-place-user.pure';
import { ContactFormHistoryPure } from '@/modules/contact-form-history/domain/contact-form-history.pure';
import { ContactFormPure } from '@/modules/contact-form/domain/contact-form.pure';
import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { CustomerRequestPure } from '@/modules/customer-request/domain/customer-request.pure';
import { DesignPure } from '@/modules/design/domain/design.pure';
import { DiscountNotificationPure } from '@/modules/discount-notification/domain/discount-notification.pure';
import { DiscountPure } from '@/modules/discount/domain/discount.pure';
import { ExitControlPure } from '@/modules/exit-control/domain/exit-control.pure';
import { FavoriteProductPure } from '@/modules/favorite-product/domain/favorite-product.pure';
import { GoogleFormUtmPure } from '@/modules/google-form-utm/domain/google-form-utm.pure';
import { HeardAboutUsOptionPure } from '@/modules/heard-about-us-option/domain/heard-about-us-option.pure';
import { HelpDeskPure } from '@/modules/help-desk/domain/help-desk.pure';
import { HolidayPure } from '@/modules/holiday/domain/holiday.pure';
import { ImpersonateHistoryPure } from '@/modules/impersonate-history/domain/impersonate-history.pure';
import { IncredibleOfferSentNotificationPure } from '@/modules/incredible-offer-sent-notification/domain/incredible-offer-sent-notification.pure';
import { InvitationCodePure } from '@/modules/invitation-code/domain/invitation-code.pure';
import { InvoiceAddressPure } from '@/modules/invoice-address/domain/invoice-address.pure';
import { InvoiceHistoryPure } from '@/modules/invoice-history/domain/invoice-history.pure';
import { InvoiceInvoiceStatusPure } from '@/modules/invoice-invoice-status/domain/invoice-invoice-status.pure';
import { InvoicePaymentHistoryPure } from '@/modules/invoice-payment-history/domain/invoice-payment-history.pure';
import { InvoicePaymentPure } from '@/modules/invoice-payment/domain/invoice-payment.pure';
import { InvoiceProductItemInvoiceProductStatusPure } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status.pure';
import { InvoiceReversalPure } from '@/modules/invoice-reversal/domain/invoice-reversal.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ModelVisitPure } from '@/modules/model-visit/domain/model-visit.pure';
import { NeedsPhotographySubproductPure } from '@/modules/needs-photography-subproduct/domain/needs-photography-subproduct.pure';
import { NegotiationHistoryPure } from '@/modules/negotiation-history/domain/negotiation-history.pure';
import { NegotiationStepPure } from '@/modules/negotiation-step/domain/negotiation-step.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { PaymentRequestPure } from '@/modules/payment-request/domain/payment-request.pure';
import { PreorderPreorderStatusPure } from '@/modules/preorder-preorder-status/domain/preorder-preorder-status.pure';
import { PreorderRegisterPure } from '@/modules/preorder-register/domain/preorder-register.pure';
import { PreorderPure } from '@/modules/preorder/domain/preorder.pure';
import { PrintProfilePure } from '@/modules/print-profile/domain/print-profile.pure';
import { PrintRipPure } from '@/modules/print-rip/domain/print-rip.pure';
import { ProductCommentLikePure } from '@/modules/product-comment-like/domain/product-comment-like.pure';
import { ProductCommentPure } from '@/modules/product-comment/domain/product-comment.pure';
import { ProductLikePure } from '@/modules/product-like/domain/product-like.pure';
import { ProductRatePure } from '@/modules/product-rate/domain/product-rate.pure';
import { ProductionPadProductionPadStatusPure } from '@/modules/production-pad-production-pad-status/domain/production-pad-production-pad-status.pure';
import { ProductionRollPure } from '@/modules/production-roll/domain/production-roll.pure';
import { RetargetingWalletChargePure } from '@/modules/retargeting-wallet-charge/domain/retargeting-wallet-charge.pure';
import { ReturnItemStatusReturnRequestItemPure } from '@/modules/return-item-status-return-request-item/domain/return-item-status-return-request-item.pure';
import { ReturnRequestAddressPure } from '@/modules/return-request-address/domain/return-request-address.pure';
import { ReturnRequestHistoryPure } from '@/modules/return-request-history/domain/return-request-history.pure';
import { ReturnRequestItemReturnItemStatusPure } from '@/modules/return-request-item-return-item-status/domain/return-request-item-return-item-status.pure';
import { ReturnRequestReturnStatusPure } from '@/modules/return-request-return-status/domain/return-request-return-status.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { ReturnedInvoicePure } from '@/modules/returned-invoice/domain/returned-invoice.pure';
import { RipTemplatePure } from '@/modules/rip-template/domain/rip-template.pure';
import { SocialFacebookAccountPure } from '@/modules/social-facebook-account/domain/social-facebook-account.pure';
import { SocialGoogleAccountPure } from '@/modules/social-google-account/domain/social-google-account.pure';
import { SubproductStockHistoryPure } from '@/modules/subproduct-stock-history/domain/subproduct-stock-history.pure';
import { TransactionPure } from '@/modules/transaction/domain/transaction.pure';
import { UserCartPure } from '@/modules/user-cart/domain/user-cart.pure';
import { UserHasPermissionPure } from '@/modules/user-has-permission/domain/user-has-role.pure';
import { UserHasRolePure } from '@/modules/user-has-role/domain/user-has-role.pure';
import { UserUtmPure } from '@/modules/user-utm/domain/user-utm.pure';
import { UtmGoogleFormCouponPure } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon.pure';
import { VerifyUserPure } from '@/modules/verify-user/domain/verify-user.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.pure';
import { WalletGiftChargePure } from '@/modules/wallet-gift-charge/domain/wallet-gift-charge.pure';
import { WalletHistoryPure } from '@/modules/wallet-history/domain/wallet-history.pure';
import { WalletPure } from '@/modules/wallet/domain/wallet.pure';
import { WithdrawalRequestPure } from '@/modules/withdrawal-request/domain/withdrawal-request.pure';

@InputType('UserPureDomain')
@ObjectType()
export class UserPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  family: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
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

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  loginEmail?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
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

  @Field(() => [ActivityPure])
  activities: ActivityPure[];

  @Field(() => [AddressPure], { nullable: true })
  addresses?: AddressPure[];

  @Field(() => [AutomationEventPure])
  automationEvents: AutomationEventPure[];

  @Field(() => [BasicCarpetDesignerPure])
  basicCarpetDesigners: BasicCarpetDesignerPure[];

  @Field(() => CampaignGoldCoinSubPure)
  campaignGoldCoinSubs: CampaignGoldCoinSubPure;

  @Field(() => [CampaignInstagramFollowPure])
  campaignInstagramFollows: CampaignInstagramFollowPure[];

  @Field(() => [CampaignPetFormPure])
  campaignPetForms: CampaignPetFormPure[];

  @Field(() => [CampaignRoomvoImagePure])
  campaignRoomvoImages: CampaignRoomvoImagePure[];

  @Field(() => [CampaignRoomvoVotePure])
  campaignRoomvoVotes: CampaignRoomvoVotePure[];

  @Field(() => [CampaignSubscriptionPure])
  campaignSubscriptions: CampaignSubscriptionPure[];

  @Field(() => [CampaignUefaEuroSubscriberHistoryPure])
  campaignUefaEuroSubscriberHistories: CampaignUefaEuroSubscriberHistoryPure[];

  @Field(() => [CampaignUefaEuroSubscriberPure])
  campaignUefaEuroSubscribers: CampaignUefaEuroSubscriberPure[];

  @Field(() => [CampaignVotingImageUserPure])
  campaignVotingImageUsers: CampaignVotingImageUserPure[];

  @Field(() => [CarpetFeatureUserPure], { nullable: true })
  carpetFeatureUsers?: CarpetFeatureUserPure[];

  @Field(() => [CarpetUsagePlaceUserPure], { nullable: true })
  carpetUsagePlaceUsers?: CarpetUsagePlaceUserPure[];

  @Field(() => [ContactFormHistoryPure], { nullable: true })
  contactFormHistories?: ContactFormHistoryPure[];

  @Field(() => [ContactFormPure], { nullable: true })
  contactForms?: ContactFormPure[];

  @Field(() => [CouponPure], { nullable: true })
  coupons?: CouponPure[];

  @Field(() => [CouponPure], { nullable: true })
  coupons2?: CouponPure[];

  @Field(() => [CouponPure], { nullable: true })
  coupons3?: CouponPure[];

  @Field(() => [CouponPure], { nullable: true })
  coupons4?: CouponPure[];

  @Field(() => [CustomerRequestPure], { nullable: true })
  customerRequests?: CustomerRequestPure[];

  @Field(() => [DesignPure], { nullable: true })
  designs?: DesignPure[];

  @Field(() => [DiscountNotificationPure], { nullable: true })
  discountNotifications?: DiscountNotificationPure[];

  @Field(() => [DiscountPure], { nullable: true })
  discounts?: DiscountPure[];

  @Field(() => [DiscountPure], { nullable: true })
  discounts2?: DiscountPure[];

  @Field(() => [ExitControlPure], { nullable: true })
  exitControls?: ExitControlPure[];

  @Field(() => [FavoriteProductPure], { nullable: true })
  favoriteProducts?: FavoriteProductPure[];

  @Field(() => [GoogleFormUtmPure], { nullable: true })
  googleFormUtms?: GoogleFormUtmPure[];

  @Field(() => HelpDeskPure, { nullable: true })
  helpDesks?: HelpDeskPure;

  @Field(() => [HolidayPure], { nullable: true })
  holidays?: HolidayPure[];

  @Field(() => [ImpersonateHistoryPure], { nullable: true })
  impersonateHistories?: ImpersonateHistoryPure[];

  @Field(() => [ImpersonateHistoryPure], { nullable: true })
  impersonateHistories2?: ImpersonateHistoryPure[];

  @Field(() => [IncredibleOfferSentNotificationPure], { nullable: true })
  incredibleOfferSentNotifications?: IncredibleOfferSentNotificationPure[];

  @Field(() => [InvoiceAddressPure], { nullable: true })
  invoiceAddresses?: InvoiceAddressPure[];

  @Field(() => [InvoiceHistoryPure], { nullable: true })
  invoiceHistories?: InvoiceHistoryPure[];

  @Field(() => [InvoiceInvoiceStatusPure], { nullable: true })
  invoiceInvoiceStatuses?: InvoiceInvoiceStatusPure[];

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories?: InvoicePaymentHistoryPure[];

  @Field(() => [InvoicePaymentHistoryPure], { nullable: true })
  invoicePaymentHistories2?: InvoicePaymentHistoryPure[];

  @Field(() => [InvoicePaymentPure], { nullable: true })
  invoicePayments?: InvoicePaymentPure[];

  @Field(() => [InvoicePaymentPure], { nullable: true })
  invoicePayments2?: InvoicePaymentPure[];

  @Field(() => [InvoiceProductItemInvoiceProductStatusPure], { nullable: true })
  invoiceProductItemInvoiceProductStatuses?: InvoiceProductItemInvoiceProductStatusPure[];

  @Field(() => [InvoiceReversalPure], { nullable: true })
  invoiceReversals?: InvoiceReversalPure[];

  @Field(() => [InvoicePure], { nullable: true })
  invoices?: InvoicePure[];

  @Field(() => [InvoicePure], { nullable: true })
  invoices2?: InvoicePure[];

  @Field(() => [ModelVisitPure], { nullable: true })
  modelVisits?: ModelVisitPure[];

  @Field(() => [NeedsPhotographySubproductPure], { nullable: true })
  needsPhotographySubproducts?: NeedsPhotographySubproductPure[];

  @Field(() => [NeedsPhotographySubproductPure], { nullable: true })
  needsPhotographySubproducts2?: NeedsPhotographySubproductPure[];

  @Field(() => [NegotiationHistoryPure], { nullable: true })
  negotiationHistories?: NegotiationHistoryPure[];

  @Field(() => [NegotiationHistoryPure], { nullable: true })
  negotiationHistories2?: NegotiationHistoryPure[];

  @Field(() => [NegotiationHistoryPure], { nullable: true })
  negotiationHistories3?: NegotiationHistoryPure[];

  @Field(() => [NegotiationStepPure], { nullable: true })
  negotiationSteps?: NegotiationStepPure[];

  @Field(() => [NegotiationPure], { nullable: true })
  negotiations?: NegotiationPure[];

  @Field(() => [NegotiationPure], { nullable: true })
  negotiations2?: NegotiationPure[];

  @Field(() => [PaymentRequestPure], { nullable: true })
  paymentRequests?: PaymentRequestPure[];

  @Field(() => [PreorderPreorderStatusPure], { nullable: true })
  preorderPreorderStatuses?: PreorderPreorderStatusPure[];

  @Field(() => [PreorderRegisterPure], { nullable: true })
  preorderRegisters?: PreorderRegisterPure[];

  @Field(() => [PreorderRegisterPure], { nullable: true })
  preorderRegisters2?: PreorderRegisterPure[];

  @Field(() => [PreorderPure], { nullable: true })
  preorders?: PreorderPure[];

  @Field(() => [PreorderPure], { nullable: true })
  preorders2?: PreorderPure[];

  @Field(() => [PreorderPure], { nullable: true })
  preorders3?: PreorderPure[];

  @Field(() => [PrintProfilePure], { nullable: true })
  printProfiles?: PrintProfilePure[];

  @Field(() => [PrintProfilePure], { nullable: true })
  printProfiles2?: PrintProfilePure[];

  @Field(() => [PrintRipPure], { nullable: true })
  printRips?: PrintRipPure[];

  @Field(() => [ProductCommentLikePure], { nullable: true })
  productCommentLikes?: ProductCommentLikePure[];

  @Field(() => [ProductCommentPure], { nullable: true })
  productComments?: ProductCommentPure[];

  @Field(() => [ProductCommentPure], { nullable: true })
  productComments2?: ProductCommentPure[];

  @Field(() => [ProductLikePure], { nullable: true })
  productLikes?: ProductLikePure[];

  @Field(() => [ProductRatePure], { nullable: true })
  productRates?: ProductRatePure[];

  @Field(() => [ProductionPadProductionPadStatusPure], { nullable: true })
  productionPadProductionPadStatuses?: ProductionPadProductionPadStatusPure[];

  @Field(() => [ProductionRollPure], { nullable: true })
  productionRolls?: ProductionRollPure[];

  @Field(() => [ProductionRollPure], { nullable: true })
  productionRolls2?: ProductionRollPure[];

  @Field(() => [RetargetingWalletChargePure], { nullable: true })
  retargetingWalletCharges?: RetargetingWalletChargePure[];

  @Field(() => [ReturnItemStatusReturnRequestItemPure], { nullable: true })
  returnItemStatusReturnRequestItems?: ReturnItemStatusReturnRequestItemPure[];

  @Field(() => [ReturnRequestAddressPure], { nullable: true })
  returnRequestAddresses?: ReturnRequestAddressPure[];

  @Field(() => [ReturnRequestHistoryPure], { nullable: true })
  returnRequestHistories?: ReturnRequestHistoryPure[];

  @Field(() => [ReturnRequestHistoryPure], { nullable: true })
  returnRequestHistories2?: ReturnRequestHistoryPure[];

  @Field(() => [ReturnRequestItemReturnItemStatusPure], { nullable: true })
  returnRequestItemReturnItemStatuses?: ReturnRequestItemReturnItemStatusPure[];

  @Field(() => [ReturnRequestReturnStatusPure], { nullable: true })
  returnRequestReturnStatuses?: ReturnRequestReturnStatusPure[];

  @Field(() => [ReturnRequestPure], { nullable: true })
  returnRequests?: ReturnRequestPure[];

  @Field(() => [ReturnedInvoicePure], { nullable: true })
  returnedInvoices?: ReturnedInvoicePure[];

  @Field(() => [RipTemplatePure], { nullable: true })
  ripTemplates?: RipTemplatePure[];

  @Field(() => [SocialFacebookAccountPure], { nullable: true })
  socialFacebookAccounts?: SocialFacebookAccountPure[];

  @Field(() => [SocialGoogleAccountPure], { nullable: true })
  socialGoogleAccounts?: SocialGoogleAccountPure[];

  @Field(() => [SubproductStockHistoryPure], { nullable: true })
  subproductStockHistories?: SubproductStockHistoryPure[];

  @Field(() => [TransactionPure], { nullable: true })
  transactions?: TransactionPure[];

  @Field(() => [TransactionPure], { nullable: true })
  transactions2?: TransactionPure[];

  @Field(() => [UserCartPure], { nullable: true })
  userCarts?: UserCartPure[];

  @Field(() => [UserUtmPure], { nullable: true })
  userUtms?: UserUtmPure[];

  @Field(() => HeardAboutUsOptionPure, { nullable: true })
  heardAboutUsOption?: HeardAboutUsOptionPure;

  @Field(() => InvitationCodePure, { nullable: true })
  invitationCode?: InvitationCodePure;

  @Field(() => UserPure, { nullable: true })
  phoneVerifiedBy2?: UserPure;

  @Field(() => [UserPure], { nullable: true })
  users?: UserPure[];

  @Field(() => [UtmGoogleFormCouponPure], { nullable: true })
  utmGoogleFormCoupons?: UtmGoogleFormCouponPure[];

  @Field(() => [VerifyUserPure], { nullable: true })
  verifyUsers?: VerifyUserPure[];

  @Field(() => [VisitorPure], { nullable: true })
  visitors?: VisitorPure[];

  @Field(() => [WalletGiftChargePure], { nullable: true })
  walletGiftCharges?: WalletGiftChargePure[];

  @Field(() => [WalletHistoryPure], { nullable: true })
  walletHistories?: WalletHistoryPure[];

  @Field(() => WalletPure, { nullable: true })
  wallets?: WalletPure;

  @Field(() => [WithdrawalRequestPure], { nullable: true })
  withdrawalRequests?: WithdrawalRequestPure[];

  @Field(() => [WithdrawalRequestPure], { nullable: true })
  withdrawalRequests2?: WithdrawalRequestPure[];

  @Field(() => [UserHasRolePure])
  userHasRole: UserHasRolePure[];

  @Field(() => [UserHasPermissionPure])
  userHasPermission: UserHasPermissionPure[];
}
