import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnRequestItemReturnItemStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  returnItemStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
