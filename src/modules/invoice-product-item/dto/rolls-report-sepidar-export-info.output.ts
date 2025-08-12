import { RollsReportCollection } from '@/modules/invoice-product-item/dto/rolls-report-collection.output';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RollsReportSepidarExportInfoOutput {
  @Field(() => RollsReportCollection)
  collection: RollsReportCollection;
}
