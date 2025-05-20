import { ObjectType, Field, ID, Float } from '@nestjs/graphql';
import { IDField, FilterableField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Setting {
  @IDField(() => ID)
  id: number;

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

  @Field(() => Number, { nullable: true })
  delayDaysNormal?: number;

  @Field(() => Number, { nullable: true })
  delayDaysCustom?: number;

  @Field(() => Float, { nullable: true })
  taxRate?: number;

  @Field()
  freeDelivery: boolean;

  @Field({ nullable: true })
  minimumPriceForFreeDelivery: string;

  @Field(() => Float, { nullable: true })
  boxCapacity?: number;

  @Field(() => Float)
  digikalaSharePercent: number;

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field(() => Number, { nullable: true })
  productionRollId?: number;

  @Field({ nullable: true })
  padRollRefCode?: string;

  @Field()
  redisWorkerStatus: boolean;

  @Field()
  preorderMode: boolean;

  @Field({ nullable: true })
  shirazDeliveryRate?: string;

  @Field({ nullable: true })
  aroundShirazDeliveryRate?: string;

  @Field({ nullable: true })
  defaultDeliveryRate?: string;

  @Field(() => Number, { nullable: true })
  delayReportDaysForAdmin: number;

  @Field(() => Number, { nullable: true })
  delayReportDaysForProduction: number;

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

  @Field()
  returnDeadlineForTestDelivered: number;

  @Field()
  returnDeadlineForTestSent: number;

  @Field()
  returnDeadlineForGuarantee: number;

  @Field(() => Number, { nullable: true })
  retargetingCouponExpiryDays?: number;

  @Field(() => Number, { nullable: true })
  retargetingCouponAmount?: number;

  @Field(() => Number, { nullable: true })
  retargetingCouponMaximumPercent?: number;

  @Field(() => Number, { nullable: true })
  retargetingCouponMaximumUse?: number;

  @Field(() => Number, { nullable: true })
  retargetingWalletChargeAmount?: number;

  @Field(() => Number, { nullable: true })
  retargetingWalletMaximumPercent?: number;

  @Field(() => Number, { nullable: true })
  retargetingNotifyAfterSentDays?: number;

  @Field(() => Number, { nullable: true })
  retargetingNotifyIfNotUsedDays?: number;

  @Field(() => Number, { nullable: true })
  retargetingFirstNotifyWalletUsageDays?: number;

  @Field(() => Number, { nullable: true })
  retargetingSecondNotifyWalletUsageDays?: number;

  @Field(() => Number, { nullable: true })
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

  @Field()
  retargetingCommentingReminderDays?: number;

  @Field({ nullable: true })
  retargetingCommentingReminderText?: string;

  @Field()
  campaignPetDiscountAmount: number;

  @Field()
  campaignPetMinDonationAmount: number;

  @Field(() => Number, { nullable: true })
  maxWastagePercent?: number;

  @Field()
  preorderNewModeActive: boolean;

  @Field(() => Number, { nullable: true })
  preorderDailyLimit?: number;

  @Field(() => Number, { nullable: true })
  preorderWaitDays?: number;

  @Field(() => Number, { nullable: true })
  preorderPurchasePeriodHours?: number;

  @Field(() => Number, { nullable: true })
  preorderRegisterPrice?: number;

  @Field(() => Number, { nullable: true })
  deliveryDurationDays?: number;

  @Field(() => Number, { nullable: true })
  preorderNotifyBeforeDays?: number;

  @Field(() => Number, { nullable: true })
  preorderNotifyAfterPeriodStartedDays?: number;

  @Field(() => Number, { nullable: true })
  preorderNotifyBeforePeriodEndsDays?: number;

  @Field({ nullable: true })
  preorderNotifyBeforeStartedText?: string;

  @Field({ nullable: true })
  preorderNotifyAfterStartedText?: string;

  @Field(() => Number, { nullable: true })
  preorderNotifyIntervalHours?: number;

  @Field(() => Number, { nullable: true })
  preorderFakeCountLow?: number;

  @Field(() => Number, { nullable: true })
  preorderFakeMultiplyBy?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Number, { nullable: true })
  lotteryDraw?: number;

  @Field({ nullable: true })
  lotteryDrawNumbers?: string;

  @Field(() => Number, { nullable: true })
  lotteryDrawBrace?: number;

  @Field({ nullable: true })
  lotteryDrawNumbersBrace?: string;
}
