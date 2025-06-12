import { CreateSenderInformationInput } from './create-sender-information.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSenderInformationInput extends PartialType(
  CreateSenderInformationInput
) {
  @Field(() => Int)
  id: number;
}
