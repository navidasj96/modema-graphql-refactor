import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { User } from '@/modules/user/domain/user';

@ObjectType()
export class InvitationCode {
  @IDField(() => ID)
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
