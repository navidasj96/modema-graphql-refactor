import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';

@InputType('FavoriteProductDomain')
@ObjectType()
export class FavoriteProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct)
  subproduct: Subproduct;

  @Field(() => User)
  user: User;
}
