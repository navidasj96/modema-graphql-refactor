import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateProductCategoryRateInput')
export class CreateProductCategoryRateInput {
  @Field()
  id: number;

  @Field()
  productCategoryId: number;

  @Field()
  rateId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
