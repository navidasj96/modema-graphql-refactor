import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@InputType('NegotiationStatusDomain')
@ObjectType()
export class NegotiationStatus {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [NegotiationHistory], { nullable: true })
  negotiationHistories?: NegotiationHistory[];

  @Field(() => [Negotiation], { nullable: true })
  negotiations?: Negotiation[];
}
