import { Field, InputType } from '@nestjs/graphql';
import { ModelHasRole } from '@/modules/model-has-role/domain/model-has-role';
import { Permission } from '@/modules/permission/domain/permission';

@InputType('CreateRoleInput')
export class CreateRoleInput {
  @Field()
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
