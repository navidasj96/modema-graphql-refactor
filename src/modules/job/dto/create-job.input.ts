import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
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
