import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductItemPureInput')
@ObjectType('InvoiceProductItemPure')
export class InvoiceProductItemPure {
  @Field()
  id: number;

  @Field()
  invoiceProductId: number;

  @Field()
  currentStatusId: number;

  @Field()
  row: number;

  @Field()
  code: string;

  @Field({ nullable: true })
  padCode?: string;

  @Field(() => String, { nullable: true })
  rollReferenceCode: string | null;

  @Field(() => Number, { nullable: true })
  productionRollId: number | null;

  @Field(() => String, { nullable: true })
  predictedDateForReceivedByRepository: string | null;

  @Field({ nullable: true })
  isTagPrinted?: number;

  @Field({ nullable: true })
  isPrintedAndHeated?: number;

  @Field({ nullable: true })
  fromDepot?: number;

  @Field()
  isReversed: number;

  @Field({ nullable: true })
  printProfileId?: number;

  @Field(() => Number, { nullable: true })
  damageType: number | null;

  @Field({ nullable: true })
  damageCause?: string;

  @Field({ nullable: true })
  damageReasonId?: number;

  @Field()
  isInsertedIntoSepidar: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  tempStatusId?: number;

  @Field(() => Number, { nullable: true })
  printRipId: number | null;

  @Field(() => Number, { nullable: true })
  sortOrder: number | null;

  @Field(() => Number, { nullable: true })
  tagSortOrder: number | null;

  @Field(() => Number, { nullable: true })
  printMachineId: number | null;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;
}
