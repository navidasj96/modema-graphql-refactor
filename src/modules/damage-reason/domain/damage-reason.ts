import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

@InputType('DamageReasonDomain')
@ObjectType()
export class DamageReason {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  department: string;

  @Field()
  cause: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [InvoiceProductItem])
  invoiceProductItems: InvoiceProductItem[];
}
