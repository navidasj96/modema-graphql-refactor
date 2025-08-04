import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductLikePureDomain')
@ObjectType()
export class ProductLikePure {
  @Field(() => ID)
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

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => UserPure)
  user: UserPure;
}
