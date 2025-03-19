import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Role } from '@/modules/role/domain/role';

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
