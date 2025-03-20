import { Field, InputType } from '@nestjs/graphql';
import { CampaignPetForm } from '@/modules/campaign-pet-form/domain/campaign-pet-form';
import { CouponSubject } from '@/modules/coupon-subject/domain/coupon-subject';
import { User } from '@/modules/user/domain/user';
import { Invoice } from '@/modules/invoice/domain/invoice';
import { ReturnRequest } from '@/modules/return-request/domain/return-request';
import { UtmGoogleFormCoupon } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon';

@InputType('CreateCouponInput')
export class CreateCouponInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  code: string;

  @Field()
  offType: number;

  @Field()
  discount: string;

  @Field()
  startDate: Date;

  @Field()
  endDate: Date;

  @Field()
  maxUsage: number;

  @Field({ nullable: true })
  minInvoicePrice?: string;

  @Field({ nullable: true })
  maxDiscountPrice?: string;

  @Field({ nullable: true })
  isApplicableToDiscountedProducts?: number;

  @Field()
  forOldCustomersOnly: boolean;

  @Field()
  forReadyProductsOnly: boolean;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  retargetingUserId?: number;

  @Field({ nullable: true })
  retargetingInvoiceId?: number;

  @Field({ nullable: true })
  maxPercent?: number;

  @Field()
  onlyForOutOfStocks: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  onlyForOneItem: boolean;

  @Field()
  forNewCustomersOnly: boolean;

  @Field(() => [CampaignPetForm])
  campaignPetForms: CampaignPetForm[];

  @Field(() => [CouponSubject])
  couponSubjects: CouponSubject[];

  @Field(() => User)
  createdBy2: User;

  @Field(() => Invoice)
  retargetingInvoice: Invoice;

  @Field(() => User)
  retargetingUser: User;

  @Field(() => User)
  updatedBy2: User;

  @Field(() => User)
  user: User;

  @Field(() => [Invoice])
  invoices: Invoice[];

  @Field(() => [ReturnRequest])
  returnRequests: ReturnRequest[];

  @Field(() => [UtmGoogleFormCoupon])
  utmGoogleFormCoupons: UtmGoogleFormCoupon[];
}
