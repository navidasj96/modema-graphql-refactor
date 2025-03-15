import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ModelHasRole {
  @IDField(() => ID)
  roleId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;
}
