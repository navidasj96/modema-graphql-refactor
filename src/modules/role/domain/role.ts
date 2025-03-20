import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('RoleDomain')
@ObjectType()
export class Role {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ModelHasRole])
  modelHasRoles: ModelHasRole[];

  @Field(() => [Permission])
  permissions: Permission[];
}
