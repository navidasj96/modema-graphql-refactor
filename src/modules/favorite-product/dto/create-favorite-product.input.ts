import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { User } from '@/modules/user/domain/user';

@InputType('CreateFavoriteProductInput')
export class CreateFavoriteProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct)
  subproduct: Subproduct;

  @Field(() => User)
  user: User;
}
