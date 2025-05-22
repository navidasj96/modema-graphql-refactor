import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceProductItemInvoiceProductStatus } from '@/modules/invoice-product-item-invoice-product-status/entities/invoice-product-item-invoice-product-status.entity';
import { ExitControlItem } from '@/modules/exit-control-item/entities/exit-control-item.entity';
import { DamageReason } from '@/modules/damage-reason/entities/damage-reason.entity';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { PrintProfile } from '@/modules/print-profile/entities/print-profile.entity';
import { PrintRip } from '@/modules/print-rip/entities/print-rip.entity';
import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import { InvoiceProductStatus } from '@/modules/invoice-product-status/entities/invoice-product-status.entity';

@Index('code', ['code'], { unique: true })
@Index('invoice_product_items_current_status_id_index', ['currentStatusId'], {})
@Index('invoice_product_items_damage_reason_id_index', ['damageReasonId'], {})
@Index(
  'invoice_product_items_invoice_product_id_index',
  ['invoiceProductId'],
  {}
)
@Index('invoice_product_items_print_profile_id_index', ['printProfileId'], {})
@Index('invoice_product_items_print_rip_id_index', ['printRipId'], {})
@Index(
  'invoice_product_items_production_roll_id_index',
  ['productionRollId'],
  {}
)
@Index('invoice_product_items_row_index', ['row'], {})
@Entity('invoice_product_items', { schema: 'modema' })
export class InvoiceProductItem {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_product_id', unsigned: true })
  invoiceProductId: number;

  @Column('int', { name: 'current_status_id', unsigned: true })
  currentStatusId: number;

  @Column('int', { name: 'row', unsigned: true })
  row: number;

  @Column('varchar', { name: 'code', unique: true, length: 191 })
  code: string;

  @Column('varchar', { name: 'pad_code', nullable: true, length: 191 })
  padCode?: string;

  @Column('varchar', {
    name: 'roll_reference_code',
    nullable: true,
    length: 191,
  })
  rollReferenceCode?: string;

  @Column('int', { name: 'production_roll_id', nullable: true, unsigned: true })
  productionRollId?: number;

  @Column('date', {
    name: 'predicted_date_for_received_by_repository',
    nullable: true,
  })
  predictedDateForReceivedByRepository?: string;

  @Column('tinyint', {
    name: 'is_tag_printed',
    nullable: true,
    width: 1,
    default: () => "'1'",
  })
  isTagPrinted?: number;

  @Column('tinyint', {
    name: 'is_printed_and_heated',
    nullable: true,
    width: 1,
  })
  isPrintedAndHeated?: number;

  @Column('tinyint', { name: 'from_depot', nullable: true, width: 1 })
  fromDepot: number;

  @Column('tinyint', { name: 'is_reversed', width: 1, default: () => "'0'" })
  isReversed: number;

  @Column('int', { name: 'print_profile_id', nullable: true, unsigned: true })
  printProfileId?: number;

  @Column('tinyint', { name: 'damage_type', nullable: true })
  damageType?: number;

  @Column('varchar', { name: 'damage_cause', nullable: true, length: 191 })
  damageCause?: string;

  @Column('int', { name: 'damage_reason_id', nullable: true, unsigned: true })
  damageReasonId?: number;

  @Column('tinyint', {
    name: 'is_inserted_into_sepidar',
    width: 1,
    default: () => "'0'",
  })
  isInsertedIntoSepidar: number;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('int', { name: 'temp_status_id', nullable: true })
  tempStatusId?: number;

  @Column('int', { name: 'print_rip_id', nullable: true, unsigned: true })
  printRipId?: number;

  @Column('int', { name: 'sort_order', nullable: true })
  sortOrder?: number;

  @Column('smallint', { name: 'tag_sort_order', nullable: true })
  tagSortOrder?: number;

  @OneToMany(
    () => ExitControlItem,
    (exitControlItem) => exitControlItem.invoiceProductItem
  )
  exitControlItems: ExitControlItem[];

  @OneToMany(
    () => InvoiceProductItemInvoiceProductStatus,
    (invoiceProductItemInvoiceProductStatus) =>
      invoiceProductItemInvoiceProductStatus.invoiceProductItem
  )
  invoiceProductItemInvoiceProductStatuses: InvoiceProductItemInvoiceProductStatus[];

  @ManyToOne(
    () => InvoiceProductStatus,
    (invoiceProductStatus) => invoiceProductStatus.invoiceProductItems,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'current_status_id', referencedColumnName: 'id' }])
  currentStatus: InvoiceProductStatus;

  @ManyToOne(
    () => DamageReason,
    (damageReason) => damageReason.invoiceProductItems,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'damage_reason_id', referencedColumnName: 'id' }])
  damageReason: DamageReason;

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.invoiceProductItems,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(
    () => PrintProfile,
    (printProfile) => printProfile.invoiceProductItems,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'print_profile_id', referencedColumnName: 'id' }])
  printProfile: PrintProfile;

  @ManyToOne(() => PrintRip, (printRip) => printRip.invoiceProductItems, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'print_rip_id', referencedColumnName: 'id' }])
  printRip: PrintRip;

  @ManyToOne(
    () => ProductionRoll,
    (productionRoll) => productionRoll.invoiceProductItems,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'production_roll_id', referencedColumnName: 'id' }])
  productionRoll: ProductionRoll;
}
