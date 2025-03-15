import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class PaymentRequest {
  @IDField(() => ID)
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
}
