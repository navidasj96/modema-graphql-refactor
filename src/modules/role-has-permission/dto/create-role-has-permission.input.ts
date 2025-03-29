import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateRoleHasPermissionInput')
export class CreateRoleHasPermissionInput {
  @Field()
  permissionId: number;

  @Field()
  roleId: string;
}
