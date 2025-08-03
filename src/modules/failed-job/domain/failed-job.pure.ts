import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('FailedJobPureDomain')
@ObjectType()
export class FailedJobPure {
  @Field(() => ID)
  id: string;

  @Field()
  connection: string;

  @Field()
  queue: string;

  @Field()
  payload: string;

  @Field()
  exception: string;

  @Field({ defaultValue: () => 'CURRENT_TIMESTAMP' })
  failedAt: Date;
}
