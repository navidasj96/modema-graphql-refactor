import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateInvoiceProductItemPrintToHeatInput {
  @Field(() => String)
  deliveryToRepositoryDate: string;

  @Field(() => Number)
  productionRollId: number;

  @Field(() => Number, { nullable: true })
  printMachineId: number | null;

  @Field(() => Boolean)
  closeRoll: boolean;

  @Field(() => [Number])
  completeArr: number[];

  @Field(() => [Number])
  paddingArr: number[];
}
