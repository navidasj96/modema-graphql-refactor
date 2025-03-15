import { CreateCustomerVideoProductInput } from './create-customer-video-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerVideoProductInput extends PartialType(CreateCustomerVideoProductInput) {
  @Field(() => Int)
  id: number;
}
