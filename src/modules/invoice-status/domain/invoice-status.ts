import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class InvoiceStatus {
  @IDField(() => ID)
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
