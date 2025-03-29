import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@/modules/role/domain/role';

@InputType('CreateModelHasRoleInput')
export class CreateModelHasRoleInput {
  @Field()
  roleId: number;

  @Field()
  modelType: string;

  @Field()
  modelId: string;

  @Field(() => Role, { nullable: true })
  role?: Role;
}
