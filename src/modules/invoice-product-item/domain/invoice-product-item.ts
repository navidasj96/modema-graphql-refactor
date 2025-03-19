import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ExitControlItem } from '@/modules/exit-control-item/domain/exit-control-item';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { DamageReason } from '@/modules/damage-reason/domain/damage-reason';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/domain/invoice-product-status';

@ObjectType()
export class InvoiceProductItem {
  @IDField(() => ID)
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

  @Field({ nullable: true })
  rollReferenceCode?: string;

  @Field({ nullable: true })
  productionRollId?: number;

  @Field({ nullable: true })
  predictedDateForReceivedByRepository?: string;

  @Field({ nullable: true })
  isTagPrinted?: boolean;

  @Field({ nullable: true })
  isPrintedAndHeated?: boolean;

  @Field({ nullable: true })
  fromDepot?: boolean;

  @Field()
  isReversed: boolean;

  @Field({ nullable: true })
  printProfileId?: number;

  @Field({ nullable: true })
  damageType?: number;

  @Field({ nullable: true })
  damageCause?: string;

  @Field({ nullable: true })
  damageReasonId?: number;

  @Field()
  isInsertedIntoSepidar: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  tempStatusId?: number;

  @Field({ nullable: true })
  printRipId?: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  tagSortOrder?: number;

  @Field(() => [ExitControlItem], { nullable: true })
  exitControlItems?: ExitControlItem[];

  @Field(() => [InvoiceProductItemInvoiceProductStatus], { nullable: true })
  invoiceProductItemInvoiceProductStatuses?: InvoiceProductItemInvoiceProductStatus[];

  @Field(() => InvoiceProductStatus, { nullable: true })
  currentStatus?: InvoiceProductStatus;

  @Field(() => DamageReason, { nullable: true })
  damageReason?: DamageReason;

  @Field(() => InvoiceProduct, { nullable: true })
  invoiceProduct?: InvoiceProduct;

  @Field(() => PrintProfile, { nullable: true })
  printProfile?: PrintProfile;

  @Field(() => PrintRip, { nullable: true })
  printRip?: PrintRip;

  @Field(() => ProductionRoll, { nullable: true })
  productionRoll?: ProductionRoll;
}
