import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SizeWithCountInput {
  @Field(() => String)
  sizeId: string;

  @Field(() => Number)
  count: number;
}

@InputType()
export class CreateCarpetPadInput {
  @Field(() => Number)
  productionPadRollId: number;

  @Field(() => String)
  padRequestDate: string;

  @Field(() => [SizeWithCountInput])
  sizesWithCount: [SizeWithCountInput];
}
