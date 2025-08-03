import { ProductPure } from '@/modules/product/domain/product.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DiscountNotificationPureDomain')
@ObjectType()
export class DiscountNotificationPure {
  @Field(() => ID)
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

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => UserPure)
  user: UserPure;
}
