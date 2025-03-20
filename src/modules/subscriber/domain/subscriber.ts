import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('SubscriberDomain')
@ObjectType()
export class Subscriber {
  @IDField(() => ID)
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
