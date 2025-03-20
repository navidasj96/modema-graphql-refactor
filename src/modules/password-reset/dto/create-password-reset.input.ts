import { Field, InputType } from '@nestjs/graphql';

@InputType('CreatePasswordResetInput')
export class CreatePasswordResetInput {
  @Field()
  email: string;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;
}
