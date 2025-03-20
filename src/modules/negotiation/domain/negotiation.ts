import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { FileNegotiation } from '@/modules/file-negotiation/domain/file-negotiation';
import { InvoiceNegotiation } from '@/modules/invoice-negotiation/domain/invoice-negotiation';
import { NegotiationHistory } from '@/modules/negotiation-history/domain/negotiation-history';
import { NegotiationStep } from '@/modules/negotiation-step/domain/negotiation-step';
import { NegotiationStatus } from '@/modules/negotiation-status/domain/negotiation-status';
import { User } from '@/modules/user/domain/user';

@InputType('NegotiationDomain')
@ObjectType()
export class Negotiation {
  @IDField(() => ID)
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

  @Field(() => [FileNegotiation], { nullable: true })
  fileNegotiations?: FileNegotiation[];

  @Field(() => [InvoiceNegotiation], { nullable: true })
  invoiceNegotiations?: InvoiceNegotiation[];

  @Field(() => [NegotiationHistory], { nullable: true })
  negotiationHistories?: NegotiationHistory[];

  @Field(() => [NegotiationStep], { nullable: true })
  negotiationSteps?: NegotiationStep[];

  @Field(() => NegotiationStatus, { nullable: true })
  negotiationStatus?: NegotiationStatus;

  @Field(() => User, { nullable: true })
  negotiator?: User;

  @Field(() => User, { nullable: true })
  submittedBy2?: User;
}
