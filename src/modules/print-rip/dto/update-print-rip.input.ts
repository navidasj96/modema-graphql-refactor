import { CreatePrintRipInput } from './create-print-rip.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrintRipInput extends PartialType(CreatePrintRipInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  ripNumber: string;

  @Field(() => String)
  ripTemplateId: number;
}
