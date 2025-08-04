import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PasswordResetPureDomain')
@ObjectType()
export class PasswordResetPure {
  @Field(() => ID)
  email: string;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;
}
