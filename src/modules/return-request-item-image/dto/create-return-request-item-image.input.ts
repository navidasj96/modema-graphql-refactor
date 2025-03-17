import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateReturnRequestItemImageInput {
  @Field()
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
