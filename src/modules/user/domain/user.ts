import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Activity } from '../../activity/domain/activity';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('UserInput')
@ObjectType()
export class User {
  @IDField(() => ID)
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

  @Field(() => [Activity])
  activities: Activity[];
}
