import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ModelHasPermission {
  @IDField(() => ID)
  permissionId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;
}
