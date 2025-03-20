import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('PermissionGroupDomain')
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
