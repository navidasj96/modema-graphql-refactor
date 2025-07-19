import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePrintMachineInput {
  @Field(() => String)
  name: string;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;
}
