import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateUserInput')
export class CreateUserInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  isActive?: number;
}
