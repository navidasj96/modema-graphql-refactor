import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}
