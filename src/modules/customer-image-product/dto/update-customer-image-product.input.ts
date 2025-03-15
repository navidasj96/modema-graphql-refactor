import { CreateCustomerImageProductInput } from './create-customer-image-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerImageProductInput extends PartialType(CreateCustomerImageProductInput) {
  @Field(() => Int)
  id: number;
}
