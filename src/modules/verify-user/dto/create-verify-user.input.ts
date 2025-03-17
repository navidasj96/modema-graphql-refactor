import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVerifyUserInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
