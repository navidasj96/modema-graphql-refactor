import { NegotiationHistoryPure } from '@/modules/negotiation-history/domain/negotiation-history.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NegotiationStatusPureDomain')
@ObjectType()
export class NegotiationStatusPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [NegotiationHistoryPure], { nullable: true })
  negotiationHistories?: NegotiationHistoryPure[];

  @Field(() => [NegotiationPure], { nullable: true })
  negotiations?: NegotiationPure[];
}
