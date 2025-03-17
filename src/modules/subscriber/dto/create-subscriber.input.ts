import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubscriberInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  mobile?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
