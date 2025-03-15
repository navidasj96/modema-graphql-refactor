import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvitationCodeInput {
  @Field()
  id: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  email?: string;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  maxUsage?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
