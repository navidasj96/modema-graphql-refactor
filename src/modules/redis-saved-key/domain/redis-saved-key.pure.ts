import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('RedisSavedKeyPureDomain')
@ObjectType()
export class RedisSavedKeyPure {
  @Field(() => ID)
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
