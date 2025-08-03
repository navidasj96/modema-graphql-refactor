import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvitationCodePureDomain')
@ObjectType()
export class InvitationCodePure {
  @Field(() => ID)
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

  @Field(() => [UserPure], { nullable: true })
  users?: UserPure[];
}
