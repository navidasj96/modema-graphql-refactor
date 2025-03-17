import { CreateUtmGoogleFormCouponInput } from './create-utm-google-form-coupon.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUtmGoogleFormCouponInput extends PartialType(CreateUtmGoogleFormCouponInput) {
  @Field(() => Int)
  id: number;
}
