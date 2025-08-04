import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';

@InputType('DamageReasonPureDomain')
@ObjectType()
export class DamageReasonPure {
  @Field(() => ID)
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

  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];
}
