import { Field, InputType } from '@nestjs/graphql';
import { User } from '@/modules/user/domain/user';

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

  @Field(() => [User], { nullable: true })
  users?: User[];
}
