import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class IncredibleOffer {
  @IDField(() => ID)
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
