import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';
import { IDField, FilterableField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class SettingsHistory {
  @IDField(() => ID)
  id: number;

  @Field(() => Int)
  settingId: number;

  @FilterableField()
  pricePerMeter: string;

  @Field(() => Float, { nullable: true })
  minWidth?: number;

  @Field(() => Float, { nullable: true })
  maxWidth?: number;

  @Field(() => Float, { nullable: true })
  minLength?: number;

  @Field(() => Float, { nullable: true })
  maxLength?: number;

  @Field(() => Float, { nullable: true })
  weightPerMeter?: number;

  @Field(() => Float, { nullable: true })
  padWeightPerMeter?: number;

  @Field(() => Float, { nullable: true })
  averageRolledHeight?: number;

  @Field(() => Float, { nullable: true })
  maxDistanceForFreeDelivery?: number;

  @Field(() => Int, { nullable: true })
  delayDaysNormal?: number;

  @Field(() => Int, { nullable: true })
  delayDaysCustom?: number;

  @Field(() => Float, { nullable: true })
  taxRate?: number;

  @Field()
  freeDelivery: number;

  @Field({ nullable: true })
  minimumPriceForFreeDelivery?: string;

  @Field({ nullable: true })
  boxCapacity?: string;

  @Field(() => Float, { nullable: true })
  digikalaSharePercent?: number;

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field(() => Int, { nullable: true })
  productionRollId?: number;

  @Field({ nullable: true })
  padRollRefCode?: string;

  @Field()
  redisWorkerStatus: number;

  @Field()
  preorderMode: number;

  @Field({ nullable: true })
  shirazDeliveryRate?: string;

  @Field({ nullable: true })
  aroundShirazDeliveryRate?: string;

  @Field({ nullable: true })
  defaultDeliveryRate?: string;

  @Field(() => Int, { nullable: true })
  delayReportDaysForAdmin?: number;

  @Field(() => Int, { nullable: true })
  delayReportDaysForProduction?: number;

  @Field({ nullable: true })
  snappToken?: string;

  @Field({ nullable: true })
  snappTokenExpiresAt?: Date;

  @Field({ nullable: true })
  digipayToken?: string;

  @Field({ nullable: true })
  digipayTokenExpiresAt?: Date;

  @Field({ nullable: true })
  taraToken?: string;

  @Field({ nullable: true })
  taraTokenExpiresAt?: Date;

  @Field(() => Int)
  returnDeadlineForTestDelivered: number;

  @Field(() => Int)
  returnDeadlineForTestSent: number;

  @Field(() => Int)
  returnDeadlineForGuarantee: number;

  @Field(() => Int, { nullable: true })
  retargetingCouponExpiryDays?: number;

  @Field(() => Int, { nullable: true })
  retargetingCouponAmount?: number;

  @Field(() => Int, { nullable: true })
  retargetingCouponMaximumPercent?: number;

  @Field(() => Int, { nullable: true })
  retargetingCouponMaximumUse?: number;

  @Field(() => Int, { nullable: true })
  retargetingWalletChargeAmount?: number;

  @Field(() => Int, { nullable: true })
  retargetingWalletMaximumPercent?: number;

  @Field(() => Int, { nullable: true })
  retargetingNotifyAfterSentDays?: number;

  @Field(() => Int, { nullable: true })
  retargetingNotifyIfNotUsedDays?: number;

  @Field(() => Int, { nullable: true })
  retargetingFirstNotifyWalletUsageDays?: number;

  @Field(() => Int, { nullable: true })
  retargetingSecondNotifyWalletUsageDays?: number;

  @Field(() => Int, { nullable: true })
  retargetingThirdNotifyWalletUsageDays?: number;

  @Field({ nullable: true })
  retargetingTextToCustomerAfterSale?: string;

  @Field({ nullable: true })
  retargetingTextToCustomerAfterSent?: string;

  @Field({ nullable: true })
  retargetingTextToCustomerAfterFriendInvoiceSent?: string;

  @Field({ nullable: true })
  retargetingTextToCustomerIfCouponNotUsed?: string;

  @Field({ nullable: true })
  retargetingTextToCustomerIfWalletNotUsed?: string;

  @Field({ nullable: true })
  retargetingTextToCustomerAfterEachFriendSale?: string;

  @Field(() => Int)
  retargetingCommentingReminderDays: number;

  @Field({ nullable: true })
  retargetingCommentingReminderText?: string;

  @Field(() => Int, { nullable: true })
  campaignPetDiscountAmount?: number;

  @Field(() => Int, { nullable: true })
  campaignPetMinDonationAmount?: number;

  @Field(() => Int, { nullable: true })
  maxWastagePercent?: number;

  @Field()
  preorderNewModeActive: number;

  @Field(() => Int, { nullable: true })
  preorderDailyLimit?: number;

  @Field(() => Int, { nullable: true })
  preorderWaitDays?: number;

  @Field(() => Int, { nullable: true })
  preorderPurchasePeriodHours?: number;

  @Field(() => Int, { nullable: true })
  preorderRegisterPrice?: number;

  @Field(() => Int, { nullable: true })
  deliveryDurationDays?: number;

  @Field(() => Int, { nullable: true })
  preorderNotifyBeforeDays?: number;

  @Field(() => Int, { nullable: true })
  preorderNotifyAfterPeriodStartedDays?: number;

  @Field(() => Int, { nullable: true })
  preorderNotifyBeforePeriodEndsDays?: number;

  @Field({ nullable: true })
  preorderNotifyBeforeStartedText?: string;

  @Field({ nullable: true })
  preorderNotifyAfterStartedText?: string;

  @Field(() => Int, { nullable: true })
  preorderNotifyIntervalHours?: number;

  @Field(() => Int, { nullable: true })
  preorderFakeCountLow?: number;

  @Field(() => Int, { nullable: true })
  preorderFakeMultiplyBy?: number;

  @Field()
  isActive: number;

  @Field(() => Int, { nullable: true })
  historyCreatedBy?: number;

  @Field({ nullable: true })
  historyCreatedAt?: Date;

  @Field({ nullable: true })
  historyUpdatedAt?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
