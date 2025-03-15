import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceStatusInput {
  @Field()
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  color?: string;

  @Field({ nullable: true })
  notificationNumbers?: string;

  @Field({ nullable: true })
  notificationEmails?: string;

  @Field({ nullable: true })
  smsToCustomer?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
