import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';

@InputType('ProductLikeDomain')
@ObjectType()
export class ProductLike {
  @IDField(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field()
  isLike: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => User)
  user: User;
}
