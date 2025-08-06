import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RollsReportListInput {
  @Field(() => Number)
  limit: number;

  @Field(() => Number)
  offset: number;

  @Field(() => String, { nullable: true })
  search: string | null;
}
