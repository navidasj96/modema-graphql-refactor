import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Invoice } from '@/modules/invoice/domain/invoice';

@InputType('ChaparSettlementStatusDomain')
@ObjectType()
export class ChaparSettlementStatus {
  @IDField(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [Invoice])
  invoices: Invoice[];
}
