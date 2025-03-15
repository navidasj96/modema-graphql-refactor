import { CreateDiscountNotificationInput } from './create-discount-notification.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDiscountNotificationInput extends PartialType(CreateDiscountNotificationInput) {
  @Field(() => Int)
  id: number;
}
