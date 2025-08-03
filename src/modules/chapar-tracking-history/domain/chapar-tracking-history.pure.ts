import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ChaparTrackingHistoryPureDomain')
@ObjectType()
export class ChaparTrackingHistoryPure {
  @Field(() => ID)
  id: number;

  @Field()
  invoiceId: number;

  @Field()
  date: string;

  @Field()
  time: string;

  @Field()
  status: string;

  @Field()
  statusNote: string;

  @Field()
  tracking: string;

  @Field()
  reference: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => InvoicePure)
  invoice: InvoicePure;
}
