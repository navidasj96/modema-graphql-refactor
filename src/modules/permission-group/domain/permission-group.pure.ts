import { PermissionPure } from '@/modules/permission/domain/permission.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PermissionGroupPureDomain')
@ObjectType()
export class PermissionGroupPure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [PermissionPure])
  permissions: PermissionPure[];
}
