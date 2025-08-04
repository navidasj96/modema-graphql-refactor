import { FileNegotiationPure } from '@/modules/file-negotiation/domain/file-negotiation.pure';
import { InvoiceNegotiationPure } from '@/modules/invoice-negotiation/domain/invoice-negotiation.pure';
import { NegotiationHistoryPure } from '@/modules/negotiation-history/domain/negotiation-history.pure';
import { NegotiationStatusPure } from '@/modules/negotiation-status/domain/negotiation-status.pure';
import { NegotiationStepPure } from '@/modules/negotiation-step/domain/negotiation-step.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('NegotiationPureDomain')
@ObjectType()
export class NegotiationPure {
  @Field(() => ID)
  id: number;

  @Field()
  submittedBy: number;

  @Field({ nullable: true })
  customerId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  tel?: string;

  @Field()
  negotiatorId: number;

  @Field()
  negotiationStatusId: number;

  @Field()
  dateTime: Date;

  @Field()
  priority: number;

  @Field()
  isRead: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [FileNegotiationPure], { nullable: true })
  fileNegotiations?: FileNegotiationPure[];

  @Field(() => [InvoiceNegotiationPure], { nullable: true })
  invoiceNegotiations?: InvoiceNegotiationPure[];

  @Field(() => [NegotiationHistoryPure], { nullable: true })
  negotiationHistories?: NegotiationHistoryPure[];

  @Field(() => [NegotiationStepPure], { nullable: true })
  negotiationSteps?: NegotiationStepPure[];

  @Field(() => NegotiationStatusPure, { nullable: true })
  negotiationStatus?: NegotiationStatusPure;

  @Field(() => UserPure, { nullable: true })
  negotiator?: UserPure;

  @Field(() => UserPure, { nullable: true })
  submittedBy2?: UserPure;
}
