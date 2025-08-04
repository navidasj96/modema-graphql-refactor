import { CouponPure } from '@/modules/coupon/domain/coupon.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('UtmGoogleFormCouponPureDomain')
@ObjectType()
export class UtmGoogleFormCouponPure {
  @Field(() => ID)
  id: number;

  @Field()
  userId: number;

  @Field()
  type: string;

  @Field({ nullable: true })
  couponId?: number;

  @Field({ nullable: true })
  row?: number;

  @Field({ nullable: true })
  utmLink?: string;

  @Field({ nullable: true })
  shortLink?: string;

  @Field({ nullable: true })
  registerDate?: Date;

  @Field({ nullable: true })
  lastPurchaseDate?: Date;

  @Field({ nullable: true })
  returnDate?: Date;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => CouponPure, { nullable: true })
  coupon?: CouponPure;

  @Field(() => UserPure)
  user: UserPure;
}
