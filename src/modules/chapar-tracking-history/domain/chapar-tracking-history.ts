import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('ChaparTrackingHistoryDomain')
@ObjectType()
export class ChaparTrackingHistory {
  @IDField(() => ID)
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

  @Field(() => Invoice)
  invoice: Invoice;
}
