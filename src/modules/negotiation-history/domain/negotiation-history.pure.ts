import { NegotiationStatusPure } from '@/modules/negotiation-status/domain/negotiation-status.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NegotiationHistoryPureDomain')
@ObjectType()
export class NegotiationHistoryPure {
  @Field(() => ID)
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

  @Field(() => NegotiationPure, { nullable: true })
  negotiation?: NegotiationPure;

  @Field(() => NegotiationStatusPure, { nullable: true })
  negotiationStatus?: NegotiationStatusPure;

  @Field(() => UserPure, { nullable: true })
  newNegotiator?: UserPure;

  @Field(() => UserPure, { nullable: true })
  oldNegotiator?: UserPure;

  @Field(() => UserPure, { nullable: true })
  submittedBy2?: UserPure;
}
