import { CreateRfmReportInput } from './create-rfm-report.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRfmReportInput extends PartialType(CreateRfmReportInput) {
  @Field(() => Int)
  id: number;
}
