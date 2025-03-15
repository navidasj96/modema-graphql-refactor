import { CreateCustomerRequestFileInput } from './create-customer-request-file.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCustomerRequestFileInput extends PartialType(CreateCustomerRequestFileInput) {
  @Field(() => Int)
  id: number;
}
