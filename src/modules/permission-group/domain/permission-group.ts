import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('PermissionGroupDomain')
@UnPagedRelation('permissions', () => Permission)
@ObjectType()
export class PermissionGroup {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Permission])
  permissions: Permission[];
}
