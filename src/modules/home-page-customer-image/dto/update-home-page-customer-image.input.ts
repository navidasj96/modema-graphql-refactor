import { CreateHomePageCustomerImageInput } from './create-home-page-customer-image.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHomePageCustomerImageInput extends PartialType(CreateHomePageCustomerImageInput) {
  @Field(() => Int)
  id: number;
}
