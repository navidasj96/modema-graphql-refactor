import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShippingTypesSent {
  @Field()
  key: string;

  @Field(() => Int)
  value: number;
}

@ObjectType()
export class ReportSentInvoicesOutput {
  @Field(() => Number)
  sentInvoices: number;

  @Field(() => Number)
  totalBoxCount: number;

  @Field(() => Number)
  totalCarpetArea: number;

  @Field(() => Number)
  totalPadArea: number;

  @Field(() => Number)
  totalSentMeter: number;

  @Field(() => [ShippingTypesSent])
  shippingTypes: ShippingTypesSent[];
}
