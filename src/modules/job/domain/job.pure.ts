import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('JobPureDomain')
@ObjectType()
export class JobPure {
  @Field(() => ID)
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
