import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Permission } from '@/modules/permission/domain/permission';

@ObjectType()
export class ModelHasPermission {
  @IDField(() => ID)
  permissionId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => Permission, { nullable: true })
  permission?: Permission;
}
