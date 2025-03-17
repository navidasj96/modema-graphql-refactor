import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestItemVideoInput {
  @Field()
  id: number;

  @Field()
  returnRequestItemId: number;

  @Field()
  videoId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
