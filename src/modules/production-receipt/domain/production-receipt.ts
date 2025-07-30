import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql/src/decorators/id-field.decorator';

@ObjectType()
export class ProductionReceipt {
  @IDField(() => ID)
  id: number;

  @Field()
  productionReceiptTypeId: number;

  @Field()
  productionRollId: number;

  @Field(() => String, { nullable: true })
  receiptNumber: string | null;

  @Field()
  receiptDate: string;

  @Field()
  count: number;

  @Field()
  weight: number;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;
}
