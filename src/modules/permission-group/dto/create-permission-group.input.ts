import { Field, InputType } from '@nestjs/graphql';
import { Permission } from '@/modules/permission/domain/permission';

@InputType()
export class CreatePermissionGroupInput {
  @Field()
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
