import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateModelVisitInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  modelName: string;

  @Field()
  modelId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
