import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { NegotiationStep } from '@/modules/negotiation-step/domain/negotiation-step';

@InputType('NegotiationTypeDomain')
@ObjectType()
export class NegotiationType {
  @IDField(() => ID)
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
