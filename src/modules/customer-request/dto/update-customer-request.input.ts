import { CreateCustomerRequestInput } from './create-customer-request.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerRequestInput extends PartialType(CreateCustomerRequestInput) {
  @Field(() => Int)
  id: number;
}
