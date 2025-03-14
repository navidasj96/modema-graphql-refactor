import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
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
