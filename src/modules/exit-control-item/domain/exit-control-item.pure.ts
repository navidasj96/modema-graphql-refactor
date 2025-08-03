import { ExitControlPure } from '@/modules/exit-control/domain/exit-control.pure';
import { InvoiceProductItemPure } from '@/modules/invoice-product-item/domain/invoice-product-item.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ExitControlItemPureDomain')
@ObjectType()
export class ExitControlItemPure {
  @Field(() => ID)
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

  @Field(() => ExitControlPure)
  exitControl: ExitControlPure;

  @Field(() => InvoiceProductItemPure)
  invoiceProductItem: InvoiceProductItemPure;
}
