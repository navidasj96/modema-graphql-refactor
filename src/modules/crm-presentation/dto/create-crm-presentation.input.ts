import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateCrmPresentationInput')
export class CreateCrmPresentationInput {
  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  optionId?: number;
}
