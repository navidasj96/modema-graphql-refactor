import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateGhazalInputs')
export class CreateGhazalInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  explanation?: string;

  @Field({ nullable: true })
  poem?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
