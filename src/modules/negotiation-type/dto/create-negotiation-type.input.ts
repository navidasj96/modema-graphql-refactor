import { Field, InputType } from '@nestjs/graphql';
import { NegotiationStep } from '@/modules/negotiation-step/domain/negotiation-step';

@InputType('CreateNegotiationTypeInput')
export class CreateNegotiationTypeInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [NegotiationStep], { nullable: true })
  negotiationSteps?: NegotiationStep[];
}
