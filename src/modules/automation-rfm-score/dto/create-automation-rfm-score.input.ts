import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateAutomationRfmScoreInput')
export class CreateAutomationRfmScoreInput {
  @Field()
  id: number;

  @Field()
  rfmScore: string;

  @Field()
  rfmScoreTitle: string;

  @Field()
  rfmScoreCode: string;
}
