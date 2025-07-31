import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProductionRollWastageData {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  rollNumber: string;

  @Field(() => Number)
  width: number;

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

  @Field(() => String)
  isClosed: number;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;

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
