import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ExitControl } from '@/modules/exit-control/domain/exit-control';
import { InvoiceProductItem } from '@/modules/invoice-product-item/domain/invoice-product-item';

@ObjectType()
export class ExitControlItem {
  @IDField(() => ID)
  id: number;

  @Field()
  exitControlId: number;

  @Field()
  invoiceProductItemId: number;

  @Field()
  boxNo: number;

  @Field({ defaultValue: false })
  carpetScanned: boolean;

  @Field({ defaultValue: false })
  carpetPadScanned: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ExitControl)
  exitControl: ExitControl;

  @Field(() => InvoiceProductItem)
  invoiceProductItem: InvoiceProductItem;
}
