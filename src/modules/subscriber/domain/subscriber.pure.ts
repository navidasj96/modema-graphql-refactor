import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SubscriberPureDomain')
@ObjectType()
export class SubscriberPure {
  @Field(() => ID)
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
