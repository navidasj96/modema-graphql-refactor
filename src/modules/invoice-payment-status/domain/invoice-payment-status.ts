import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('InvoicePaymentStatusDomain')
@ObjectType()
export class InvoicePaymentStatus {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @Field(() => [Invoice], { nullable: true })
  invoices2?: Invoice[];
}
