import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateSettingInput')
export class CreateSettingInput {
  @Field()
  id: number;

  @Field()
  pricePerMeter: string;

  @Field()
  minWidth?: number;

  @Field()
  maxWidth?: number;

  @Field()
  minLength?: number;

  @Field()
  maxLength?: number;

  @Field()
  weightPerMeter?: number;

  @Field()
  padWeightPerMeter?: number;

  @Field()
  averageRolledHeight?: number;

  @Field()
  maxDistanceForFreeDelivery?: number;

  @Field(() => Number, { nullable: true })
  delayDaysNormal?: number;

  @Field(() => Number, { nullable: true })
  delayDaysCustom?: number;

  @Field()
  taxRate?: number;

  @Field()
  freeDelivery: number;

  @Field({ nullable: true })
  minimumPriceForFreeDelivery: string;

  @Field()
  boxCapacity?: number;

  @Field()
  digikalaSharePercent: number;

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field(() => Number, { nullable: true })
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
  preorderNewModeActive: number;

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
  isActive: number;

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
