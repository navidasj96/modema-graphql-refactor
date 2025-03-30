import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('CreateUserHasPermissionInput')
export class CreateUserHasPermissionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  userId: number;

  @Field()
  permissionId: number;
}
