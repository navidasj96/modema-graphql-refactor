import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RollsReportDetailInput {
  @Field(() => Number)
  productionRollId: number;

  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  offset: number;
}
