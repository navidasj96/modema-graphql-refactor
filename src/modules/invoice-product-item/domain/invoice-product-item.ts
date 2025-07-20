import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableRelation,
  FilterableUnPagedRelation,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { ExitControlItem } from '@/modules/exit-control-item/domain/exit-control-item';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status';
import { DamageReason } from '@/modules/damage-reason/domain/damage-reason';
import { InvoiceProduct } from '@/modules/invoice-product/domain/invoice-product';
import { PrintProfile } from '@/modules/print-profile/domain/print-profile';
import { PrintRip } from '@/modules/print-rip/domain/print-rip';
import { ProductionRoll } from '@/modules/production-roll/domain/production-roll';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/domain/invoice-product-status';
import { PrintMachine } from '@/modules/print-machine/domain/print-machine';

@InputType('InvoiceProductItemDomain')
@FilterableUnPagedRelation('exitControlItems', () => ExitControlItem)
@FilterableUnPagedRelation(
  'invoiceProductItemInvoiceProductStatuses',
  () => InvoiceProductItemInvoiceProductStatus
)
@FilterableRelation('currentStatus', () => InvoiceProductStatus)
@FilterableRelation('damageReason', () => DamageReason)
@FilterableRelation('invoiceProduct', () => InvoiceProduct)
@FilterableRelation('printProfile', () => PrintProfile, { nullable: true })
@FilterableRelation('printRip', () => PrintRip, { nullable: true })
@FilterableRelation('productionRoll', () => ProductionRoll, { nullable: true })
@QueryOptions({
  pagingStrategy: PagingStrategies.OFFSET,
  enableTotalCount: true,
  filterDepth: 4,
})
@ObjectType()
export class InvoiceProductItem {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  invoiceProductId: number;

  @FilterableField()
  currentStatusId: number;

  @Field()
  row: number;

  @FilterableField()
  code: string;

  @Field({ nullable: true })
  padCode?: string;

  @Field(() => String, { nullable: true })
  rollReferenceCode: string | null;

  @Field(() => Number, { nullable: true })
  productionRollId: number | null;

  @Field(() => String, { nullable: true })
  predictedDateForReceivedByRepository: string | null;

  @FilterableField({ nullable: true })
  isTagPrinted?: number;

  @Field({ nullable: true })
  isPrintedAndHeated?: number;

  @FilterableField({ nullable: true })
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

  @FilterableField()
  createdAt: Date;

  @FilterableField()
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

  @Field(() => PrintMachine, { nullable: true })
  printMachine: PrintMachine | null;
}
