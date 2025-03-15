import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateImpersonateHistoryInput {
  @Field()
  id: string;

  @Field()
  userId: number;

  @Field()
  impersonateUserId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
