import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AutomationRfmScorePureDomain')
@ObjectType()
export class AutomationRfmScorePure {
  @Field()
  id: number;

  @Field()
  rfmScore: string;

  @Field()
  rfmScoreTitle: string;

  @Field()
  rfmScoreCode: string;
}
