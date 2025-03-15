import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class PasswordReset {
  @IDField(() => ID)
  email: string;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;
}
