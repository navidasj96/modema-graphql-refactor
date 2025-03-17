import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestReturnStatusInput {
  @Field()
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
