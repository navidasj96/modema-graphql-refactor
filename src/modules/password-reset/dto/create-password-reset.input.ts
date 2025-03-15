import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePasswordResetInput {
  @Field()
  email: string;

  @Field()
  token: string;

  @Field({ nullable: true })
  createdAt?: Date;
}
