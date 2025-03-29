import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateJobInput')
export class CreateJobInput {
  @Field()
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
