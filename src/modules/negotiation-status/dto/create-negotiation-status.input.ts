import { Field, InputType } from '@nestjs/graphql';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';

@InputType()
export class CreateNegotiationStatusInput {
  @Field()
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
