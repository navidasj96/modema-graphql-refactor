import { CreateVisitorCouponInput } from './create-visitor-coupon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVisitorCouponInput extends PartialType(
  CreateVisitorCouponInput
) {
  @Field(() => Int)
  id: number;
}
