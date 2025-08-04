import { PermissionPure } from '@/modules/permission/domain/permission.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ModelHasPermissionPureDomain')
@ObjectType()
export class ModelHasPermissionPure {
  @Field(() => ID)
  permissionId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => PermissionPure, { nullable: true })
  permission?: PermissionPure;
}
