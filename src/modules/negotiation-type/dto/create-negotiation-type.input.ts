import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNegotiationTypeInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
