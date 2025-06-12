import { CreateShippingServiceInput } from './create-shipping-service.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShippingServiceInput extends PartialType(
  CreateShippingServiceInput
) {
  @Field(() => Int)
  id: number;
}
