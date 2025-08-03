import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ChaparSettlementStatusPureDomain')
@ObjectType()
export class ChaparSettlementStatusPure {
  @Field(() => ID)
  id: number;

  @Field()
  status: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePure])
  invoices: InvoicePure[];
}
