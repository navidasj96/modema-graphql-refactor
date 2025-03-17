import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSocialGoogleAccountInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field()
  providerUserId: string;

  @Field()
  provider: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
