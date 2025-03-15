import { CreateFileNegotiationInput } from './create-file-negotiation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileNegotiationInput extends PartialType(CreateFileNegotiationInput) {
  @Field(() => Int)
  id: number;
}
