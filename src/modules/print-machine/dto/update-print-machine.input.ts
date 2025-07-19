import { CreatePrintMachineInput } from './create-print-machine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePrintMachineInput extends PartialType(CreatePrintMachineInput) {
  @Field(() => Int)
  id: number;
}
