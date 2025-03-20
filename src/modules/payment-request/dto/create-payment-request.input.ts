import { Field, InputType } from '@nestjs/graphql';
import { PaymentRequestStatus } from '@/modules/payment-request-status/domain/payment-request-status';
import { Visitor } from '@/modules/visitor/domain/visitor';
import { User } from '@/modules/user/domain/user';

@InputType('CreatePaymentRequestInput')
export class CreatePaymentRequestInput {
  @Field()
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

  @Field(() => User, { nullable: true })
  adminUser?: User;

  @Field(() => PaymentRequestStatus)
  paymentRequestStatus: PaymentRequestStatus;

  @Field(() => Visitor)
  visitor: Visitor;
}
