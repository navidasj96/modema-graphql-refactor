import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ReportSentInvoicesInput {
  @Field(() => String, { nullable: true })
  fromDate?: string;

  @Field(() => String, { nullable: true })
  toDate?: string;
}
