import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
