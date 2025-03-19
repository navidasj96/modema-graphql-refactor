import { Field, InputType } from '@nestjs/graphql';
import { Negotiation } from '@/modules/negotiation/domain/negotiation';
import { NegotiationType } from '@/modules/negotiation-type/domain/negotiation-type';
import { User } from '@/modules/user/domain/user';

@InputType()
export class CreateNegotiationStepInput {
  @Field()
  id: number;

  @Field()
  submittedBy: number;

  @Field()
  negotiationTypeId: number;

  @Field()
  negotiationId: number;

  @Field()
  submittedAt: Date;

  @Field()
  content: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Negotiation, { nullable: true })
  negotiation?: Negotiation;

  @Field(() => NegotiationType, { nullable: true })
  negotiationType?: NegotiationType;

  @Field(() => User, { nullable: true })
  submittedBy2?: User;
}
