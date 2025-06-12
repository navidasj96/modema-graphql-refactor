import { CreateReturnRequestAddressInput } from './create-return-request-address.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateReturnRequestAddressInput extends PartialType(
  CreateReturnRequestAddressInput
) {
  @Field(() => Int)
  id: number;
}
