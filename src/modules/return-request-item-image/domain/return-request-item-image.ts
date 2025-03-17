import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ReturnRequestItemImage {
  @IDField(() => ID)
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  imageId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
