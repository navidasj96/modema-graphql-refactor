import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class NegotiationHistory {
  @IDField(() => ID)
  id: number;

  @Field()
  negotiationId: number;

  @Field()
  negotiationStatusId: number;

  @Field()
  submittedBy: number;

  @Field()
  oldNegotiatorId: number;

  @Field()
  newNegotiatorId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
