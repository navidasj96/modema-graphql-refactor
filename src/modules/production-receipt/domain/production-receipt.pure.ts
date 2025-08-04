import { ProductionReceiptTypePure } from '@/modules/production-receipt-type/domain/production-receipt-type.pure';
import { ProductionRollPure } from '@/modules/production-roll/domain/production-roll.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
@InputType('ProductionReceiptPureDomain')
export class ProductionReceiptPure {
  @Field(() => ID)
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

  @Field(() => ProductionRollPure)
  productionRoll: ProductionRollPure;

  @Field(() => ProductionReceiptTypePure)
  productionReceiptType: ProductionReceiptTypePure;
}
