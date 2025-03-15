import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNegotiationStatusInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
