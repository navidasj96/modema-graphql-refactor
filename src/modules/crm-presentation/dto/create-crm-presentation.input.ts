import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCrmPresentationInput {
  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  optionId?: number;
}
