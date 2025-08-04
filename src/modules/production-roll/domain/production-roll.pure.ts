import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { ProductionReceiptPure } from '@/modules/production-receipt/domain/production-receipt.pure';
import { UserPure } from '@/modules/user/domain/user.pure';

@InputType('ProductionRollPureDomain')
@ObjectType()
export class ProductionRollPure {
  @Field(() => ID)
  id: number;

  @Field()
  rollNumber: string;

  @Field()
  width: number;

  @Field()
  length: number;

  @Field()
  weight: number;

  @Field({ nullable: true })
  billNumber?: string;

  @Field({ nullable: true })
  closeDate?: Date;

  @Field()
  isShaggy: number;

  @Field({ nullable: true })
  shaggyColor?: string;

  @Field()
  isClosed: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  closedBy?: number;

  @Field(() => [InvoiceProductItemPure])
  invoiceProductItems: InvoiceProductItemPure[];

  @Field(() => [ProductionReceiptPure])
  productionReceipts: ProductionReceiptPure[];

  @Field(() => UserPure, { nullable: true })
  closedBy2?: UserPure;

  @Field(() => UserPure, { nullable: true })
  createdBy2?: UserPure;
}
