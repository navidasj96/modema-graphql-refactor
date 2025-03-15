import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateIncredibleOfferInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field()
  offerDate: string;

  @Field()
  productId: number;

  @Field()
  basicCarpetColorId: number;

  @Field({ nullable: true })
  discountId?: number;

  @Field()
  discountPercent: number;

  @Field()
  count: number;

  @Field()
  soldCount: number;

  @Field()
  isFake: boolean;

  @Field()
  sortOrder: number;

  @Field({ nullable: true })
  place?: number;
}
