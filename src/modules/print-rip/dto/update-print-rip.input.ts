import { CreatePrintRipInput } from './create-print-rip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrintRipInput extends PartialType(CreatePrintRipInput) {
  @Field(() => Int)
  id: number;
}
