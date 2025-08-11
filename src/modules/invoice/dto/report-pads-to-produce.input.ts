import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ReportPadsToProduceInput {
  @Field(() => String, { nullable: true })
  fromDate?: string;

  @Field(() => String, { nullable: true })
  toDate?: string;
}
