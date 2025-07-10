import { Field, InputType } from '@nestjs/graphql';

@InputType('CreatePrintRipInput')
export class CreatePrintRipInput {
  @Field()
  ripNumber: string;

  @Field()
  ripTemplateId: number;
}
