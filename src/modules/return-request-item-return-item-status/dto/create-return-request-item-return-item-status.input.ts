import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestItemReturnItemStatusInput {
  @Field()
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
