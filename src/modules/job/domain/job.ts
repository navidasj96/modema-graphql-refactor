import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Job {
  @IDField(() => ID)
  id: string;

  @Field()
  queue: string;

  @Field()
  payload: string;

  @Field()
  attempts: number;

  @Field({ nullable: true })
  reservedAt?: number;

  @Field()
  availableAt: number;

  @Field()
  createdAt: number;
}
