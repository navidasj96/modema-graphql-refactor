import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('AutomationRfmScoreDomain')
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
