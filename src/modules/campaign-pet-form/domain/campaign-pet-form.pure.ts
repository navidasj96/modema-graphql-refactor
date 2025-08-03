import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CampaignPetFormPureDomain')
@ObjectType()
export class CampaignPetFormPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  petName?: string;

  @Field()
  userId: number;

  @Field({ defaultValue: 0 })
  discountAmount: number;

  @Field({ defaultValue: 0 })
  donationAmount: number;

  @Field({ nullable: true, defaultValue: '/' })
  path?: string;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  mime?: string;

  @Field({ nullable: true })
  originalFilename?: string;

  @Field({ nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CouponPure)
  coupon: CouponPure;

  @Field(() => UserPure)
  user: UserPure;
}
