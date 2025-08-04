import { RolePure } from '@/modules/role/domain/role.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ModelHasRolePureDomain')
@ObjectType()
export class ModelHasRolePure {
  @Field(() => ID)
  roleId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => RolePure, { nullable: true })
  role?: RolePure;
}
