import { DamageReasonPure } from '@/modules/damage-reason/domain/damage-reason.pure';
import { ExitControlItemPure } from '@/modules/exit-control-item/domain/exit-control-item.pure';
import { InvoiceProductItemInvoiceProductStatusPure } from '@/modules/invoice-product-item-invoice-product-status/domain/invoice-product-item-invoice-product-status.pure';
import { InvoiceProductStatusPure } from '@/modules/invoice-product-status/domain/invoice-product-status.pure';
import { InvoiceProductPure } from '@/modules/invoice-product/domain/invoice-product.pure';
import { PrintMachinePure } from '@/modules/print-machine/domain/print-machine.pure';
import { PrintProfilePure } from '@/modules/print-profile/domain/print-profile.pure';
import { PrintRipPure } from '@/modules/print-rip/domain/print-rip.pure';
import { ProductionRollPure } from '@/modules/production-roll/domain/production-roll.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('InvoiceProductItemPureDomain')
@ObjectType()
export class InvoiceProductItemPure {
  @Field(() => ID)
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

  @Field(() => [ExitControlItemPure], { nullable: true })
  exitControlItems?: ExitControlItemPure[];

  @Field(() => [InvoiceProductItemInvoiceProductStatusPure], { nullable: true })
  invoiceProductItemInvoiceProductStatuses?: InvoiceProductItemInvoiceProductStatusPure[];

  @Field(() => InvoiceProductStatusPure, { nullable: true })
  currentStatus?: InvoiceProductStatusPure;

  @Field(() => DamageReasonPure, { nullable: true })
  damageReason?: DamageReasonPure;

  @Field(() => InvoiceProductPure, { nullable: true })
  invoiceProduct?: InvoiceProductPure;

  @Field(() => PrintProfilePure, { nullable: true })
  printProfile?: PrintProfilePure;

  @Field(() => PrintRipPure, { nullable: true })
  printRip?: PrintRipPure;

  @Field(() => ProductionRollPure, { nullable: true })
  productionRoll?: ProductionRollPure;

  @Field(() => PrintMachinePure, { nullable: true })
  printMachine: PrintMachinePure | null;
}
