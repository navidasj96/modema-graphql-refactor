import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class ExitControlItemReportSort {
  @Field(() => Number)
  field: number;

  @Field(() => String)
  direction: 'ASC' | 'DESC';
}

@InputType()
export class ExitControlItemReportInput {
  @Field(() => String, { nullable: true })
  fromDate?: string;

  @Field(() => String, { nullable: true })
  toDate?: string;

  @Field(() => String, { nullable: true })
  search?: string | null;

  @Field(() => Number, { nullable: true })
  limit?: number | null;

  @Field(() => Number, { nullable: true })
  offset?: number | null;

  @Field(() => ExitControlItemReportSort, { nullable: true })
  sort?: ExitControlItemReportSort;
}
