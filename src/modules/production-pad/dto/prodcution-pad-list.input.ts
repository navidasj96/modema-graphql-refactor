import { Field, InputType, registerEnumType } from '@nestjs/graphql';

@InputType()
export class ProductionPadListSort {
  @Field(() => Number)
  field: number;

  @Field(() => String)
  direction: 'ASC' | 'DESC';
}

@InputType()
export class ProductionPadListInput {
  @Field(() => Number, { nullable: true })
  sizeId: number | null;

  @Field(() => Number, { nullable: true })
  rollRefCode: number | null;

  @Field(() => Number, { nullable: true })
  status: number;

  @Field(() => Number, { nullable: true })
  limit: number | null;

  @Field(() => Number, { nullable: true })
  offset: number | null;

  @Field(() => String, { nullable: true })
  search: string | null;

  @Field(() => ProductionPadListSort, { nullable: true })
  sort: ProductionPadListSort | null;
}
