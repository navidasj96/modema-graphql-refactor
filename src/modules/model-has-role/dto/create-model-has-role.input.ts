import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateModelHasRoleInput {
  @Field()
  roleId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;
}
