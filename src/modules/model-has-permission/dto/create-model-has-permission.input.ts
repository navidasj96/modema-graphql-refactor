import { Field, InputType } from '@nestjs/graphql';
import { Permission } from '@/modules/permission/domain/permission';

@InputType()
export class CreateModelHasPermissionInput {
  @Field()
  permissionId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => Permission, { nullable: true })
  permission?: Permission;
}
