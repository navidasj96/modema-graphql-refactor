import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { ModelHasRolePure } from '@/modules/model-has-role/domain/model-has-role.pure';
import { PermissionPure } from '@/modules/permission/domain/permission.pure';

@InputType('RoleDomainPureInput')
@ObjectType('RoleDomainPure')
export class RolePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // These fields will be resolved via relation decorators above
  modelHasRoles?: ModelHasRolePure[];

  permissions?: PermissionPure[];
}
