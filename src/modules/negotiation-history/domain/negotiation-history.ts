import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { NegotiationStatus } from '@/modules/negotiation-status/domain/negotiation-status';
import { User } from '@/modules/user/domain/user';

@InputType('NegotiationHistoryDomain')
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

  @Field(() => Negotiation, { nullable: true })
  negotiation?: Negotiation;

  @Field(() => NegotiationStatus, { nullable: true })
  negotiationStatus?: NegotiationStatus;

  @Field(() => User, { nullable: true })
  newNegotiator?: User;

  @Field(() => User, { nullable: true })
  oldNegotiator?: User;

  @Field(() => User, { nullable: true })
  submittedBy2?: User;
}
