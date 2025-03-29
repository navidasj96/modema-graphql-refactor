import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateRedisSavedKeyInputs')
export class CreateRedisSavedKeyInput {
  @Field()
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
