import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Role } from '@/modules/role/domain/role';

@InputType('ModelHasRoleDomain')
@ObjectType()
export class ModelHasRole {
  @IDField(() => ID)
  roleId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}
