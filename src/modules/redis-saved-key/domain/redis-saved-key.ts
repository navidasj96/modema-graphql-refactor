import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class RedisSavedKey {
  @IDField(() => ID)
  id: string;

  @Field()
  redisKey: string;

  @Field()
  sortOrder: number;

  @Field()
  keyLength: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
