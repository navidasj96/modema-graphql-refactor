import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('CreateUserHasRoleInput')
export class CreateUserHasRoleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;

  @Field()
  roleId: number;
}
