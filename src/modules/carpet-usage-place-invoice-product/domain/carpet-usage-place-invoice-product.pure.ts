import { CarpetUsagePlacePure } from '@/modules/carpet-usage-place/domain/carpet-usage-place.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('CarpetUsagePlaceInvoiceProductPureDomain')
@ObjectType()
export class CarpetUsagePlaceInvoiceProductPure {
  @Field(() => ID)
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

  @Field(() => CarpetUsagePlacePure)
  carpetUsagePlace: CarpetUsagePlacePure;

  @Field(() => InvoiceProductPure)
  invoiceProduct: InvoiceProductPure;
}
