import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';
import { User } from '@/modules/user/domain/user';

@InputType('CreateDiscountNotificationInput')
export class CreateDiscountNotificationInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;

  @Field({ nullable: true })
  userId?: number;

  @Field({ nullable: true })
  productId?: number;

  @Field(() => Product)
  product: Product;

  @Field(() => User)
  user: User;
}
