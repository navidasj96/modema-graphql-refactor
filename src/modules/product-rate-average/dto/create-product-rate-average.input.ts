import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateProductRateAverageInput')
export class CreateProductRateAverageInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  rateId: number;

  @Field()
  averageRate: number;

  @Field()
  rateCount: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
