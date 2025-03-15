import { CreateCouponSubjectInput } from './create-coupon-subject.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCouponSubjectInput extends PartialType(CreateCouponSubjectInput) {
  @Field(() => Int)
  id: number;
}
