import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ImpersonateHistory {
  @IDField(() => ID)
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
