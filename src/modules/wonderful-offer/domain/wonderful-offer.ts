import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';

@InputType('WonderfulOfferDomain')
@ObjectType()
export class WonderfulOffer {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field()
  dayOfWeek: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;
}
