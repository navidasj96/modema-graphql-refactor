import { InvoicePure } from '@/modules/invoice/domain/invoice.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceModePureDomain')
@ObjectType()
export class InvoiceModePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoicePure], { nullable: true })
  invoices?: InvoicePure[];
}
