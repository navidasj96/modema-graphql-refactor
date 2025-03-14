import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class AutomationRfmScore {
  @IDField(() => ID)
  id: number;

  @Field()
  rfmScore: string;

  @Field()
  rfmScoreTitle: string;

  @Field()
  rfmScoreCode: string;
}
