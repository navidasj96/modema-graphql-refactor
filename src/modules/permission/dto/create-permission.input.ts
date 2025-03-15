import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  guardName: string;

  @Field({ nullable: true })
  permissionGroupId?: number;

  @Field({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
