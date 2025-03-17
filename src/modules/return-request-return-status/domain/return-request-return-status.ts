import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnRequestReturnStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  returnRequestId: number;

  @Field()
  returnStatusId: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
