import { NegotiationStepPure } from '@/modules/negotiation-step/domain/negotiation-step.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NegotiationTypePureDomain')
@ObjectType()
export class NegotiationTypePure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [NegotiationStepPure], { nullable: true })
  negotiationSteps?: NegotiationStepPure[];
}
