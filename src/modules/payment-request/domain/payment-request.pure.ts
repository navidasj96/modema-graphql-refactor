import { PaymentRequestStatusPure } from '@/modules/payment-request-status/domain/payment-request-status.pure';
import { UserPure } from '@/modules/user/domain/user.pure';
import { VisitorPure } from '@/modules/visitor/domain/visitor.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PaymentRequestPureDomain')
@ObjectType()
export class PaymentRequestPure {
  @Field(() => ID)
  id: number;

  @Field()
  visitorId: number;

  @Field({ nullable: true })
  adminUserId?: number;

  @Field()
  paymentRequestStatusId: number;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  message?: string;

  @Field({ nullable: true })
  bankAccountNumber?: string;

  @Field()
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => UserPure, { nullable: true })
  adminUser?: UserPure;

  @Field(() => PaymentRequestStatusPure)
  paymentRequestStatus: PaymentRequestStatusPure;

  @Field(() => VisitorPure)
  visitor: VisitorPure;
}
