import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}
