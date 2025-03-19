import { Field, InputType } from '@nestjs/graphql';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateUtmGoogleFormCouponInput {
  @Field()
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

  @Field(() => Coupon, { nullable: true })
  coupon?: Coupon;

  @Field(() => User)
  user: User;
}
