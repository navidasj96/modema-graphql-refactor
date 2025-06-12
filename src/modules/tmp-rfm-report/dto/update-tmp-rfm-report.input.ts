import { CreateTmpRfmReportInput } from './create-tmp-rfm-report.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTmpRfmReportInput extends PartialType(
  CreateTmpRfmReportInput
) {
  @Field(() => Int)
  id: number;
}
