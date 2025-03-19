import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Coupon } from '@/modules/coupon/domain/coupon';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class CampaignPetForm {
  @IDField(() => ID)
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

  @Field(() => Coupon)
  coupon: Coupon;

  @Field(() => User)
  user: User;
}
