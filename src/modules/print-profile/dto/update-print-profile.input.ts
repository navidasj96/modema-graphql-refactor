import { CreatePrintProfileInput } from './create-print-profile.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrintProfileInput extends PartialType(CreatePrintProfileInput) {
  @Field(() => Int)
  id: number;
}
