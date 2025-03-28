import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  UnPagedRelation,
} from '@ptc-org/nestjs-query-graphql';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('RoleDomainInput')
@ObjectType('RoleDomain')
@UnPagedRelation('modelHasRoles', () => ModelHasRole)
@UnPagedRelation('permissions', () => Permission)
export class Role {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  name: string;

  @FilterableField()
  guardName: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  // These fields will be resolved via relation decorators above
  modelHasRoles?: ModelHasRole[];

  permissions?: Permission[];
}
