import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Activity } from '@/modules/activity/entities/activity.entity';

@Index(
  'campaign_finding_coupon_winner_place',
  ['campaignFindingCouponWinnerPlace'],
  {},
)
@Index('login_email', ['loginEmail'], { unique: true })
@Index('login_email_2', ['loginEmail'], { unique: true })
@Index('sepidar_id', ['sepidarId'], {})
@Index('users_api_token_unique', ['apiToken'], { unique: true })
@Index(
  'users_campaign_finding_coupon_used_index',
  ['campaignFindingCouponUsed'],
  {},
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

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

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
}
