import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('FailedJobDomain')
@ObjectType()
export class FailedJob {
  @IDField(() => ID)
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
