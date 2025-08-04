import { NegotiationTypePure } from '@/modules/negotiation-type/domain/negotiation-type.pure';
import { NegotiationPure } from '@/modules/negotiation/domain/negotiation.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NegotiationStepPureDomain')
@ObjectType()
export class NegotiationStepPure {
  @Field(() => ID)
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

  @Field(() => NegotiationPure, { nullable: true })
  negotiation?: NegotiationPure;

  @Field(() => NegotiationTypePure, { nullable: true })
  negotiationType?: NegotiationTypePure;

  @Field(() => UserPure, { nullable: true })
  submittedBy2?: UserPure;
}
