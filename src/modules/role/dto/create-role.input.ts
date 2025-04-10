import { Field, InputType } from '@nestjs/graphql';

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
}
