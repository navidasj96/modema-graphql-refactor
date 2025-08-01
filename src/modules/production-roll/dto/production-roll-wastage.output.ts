import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionRollWastageData {
  @Field(() => Number)
  id: number;

  @Field(() => String, { nullable: true })
  rollNumber: string | null;

  @Field(() => Number, { nullable: true })
  width: number | null;

  @Field(() => Number)
  length: number;

  @Field(() => Number)
  weight: number;

  @Field(() => String, { nullable: true })
  billNumber?: string;

  @Field(() => Number, { nullable: true })
  closeDate: string | null;

  @Field(() => Number)
  isShaggy: number;

  @Field(() => Number, { nullable: true })
  isClosed: number | null;

  @Field(() => Number, { nullable: true })
  producedArea: number | null;

  @Field(() => Number, { nullable: true })
  damagedArea: number | null;
}

@ObjectType()
export class ProductionRollWastageOutput {
  @Field(() => [ProductionRollWastageData])
  productionRollWastage: ProductionRollWastageData[];

  @Field(() => Number)
  count: number;
}
