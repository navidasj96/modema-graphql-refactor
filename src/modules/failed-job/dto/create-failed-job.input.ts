import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFailedJobInput {
  @Field()
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
