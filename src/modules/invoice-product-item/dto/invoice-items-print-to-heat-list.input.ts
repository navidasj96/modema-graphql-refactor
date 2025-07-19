import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InvoiceItemsPrintToHeatListInput {
  @Field(() => Number, { nullable: true })
  printRipId: number | null;

  @Field(() => Number, { nullable: true })
  productionRollId: number | null;
}
