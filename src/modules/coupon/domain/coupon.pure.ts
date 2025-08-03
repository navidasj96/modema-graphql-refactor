import { CampaignPetFormPure } from '@/modules/campaign-pet-form/domain/campaign-pet-form.pure';
import { CouponSubjectPure } from '@/modules/coupon-subject/domain/coupon-subject.pure';
import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { ReturnRequestPure } from '@/modules/return-request/domain/return-request.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { UtmGoogleFormCouponPure } from '@/modules/utm-google-form-coupon/domain/utm-google-form-coupon.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CouponPureDomain')
@ObjectType()
export class CouponPure {
  @Field(() => ID)
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

  @Field(() => [CampaignPetFormPure])
  campaignPetForms: CampaignPetFormPure[];

  @Field(() => [CouponSubjectPure])
  couponSubjects: CouponSubjectPure[];

  @Field(() => UserPure)
  createdBy2: UserPure;

  @Field(() => InvoicePure)
  retargetingInvoice: InvoicePure;

  @Field(() => UserPure)
  retargetingUser: UserPure;

  @Field(() => UserPure)
  updatedBy2: UserPure;

  @Field(() => UserPure)
  user: UserPure;

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];

  @Field(() => [ReturnRequestPure])
  returnRequests: ReturnRequestPure[];

  @Field(() => [UtmGoogleFormCouponPure])
  utmGoogleFormCoupons: UtmGoogleFormCouponPure[];
}
