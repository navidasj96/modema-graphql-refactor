import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { CarpetUsagePlace } from '@/modules/carpet-usage-place/domain/carpet-usage-place';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';

@ObjectType()
export class CarpetUsagePlaceInvoiceProduct {
  @IDField(() => ID)
  id: number;

  @Field()
  invoiceProductId: number;

  @Field()
  carpetUsagePlaceId: number;

  @Field()
  row: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
  
  @Field(() => CarpetUsagePlace)
  carpetUsagePlace: CarpetUsagePlace;

  @Field(() => InvoiceProduct)
  invoiceProduct: InvoiceProduct;
}
