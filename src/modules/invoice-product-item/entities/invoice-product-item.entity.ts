import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('code', ['code'], { unique: true })
@Index('invoice_product_items_current_status_id_index', ['currentStatusId'], {})
@Index('invoice_product_items_damage_reason_id_index', ['damageReasonId'], {})
@Index(
  'invoice_product_items_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Index('invoice_product_items_print_profile_id_index', ['printProfileId'], {})
@Index('invoice_product_items_print_rip_id_index', ['printRipId'], {})
@Index(
  'invoice_product_items_production_roll_id_index',
  ['productionRollId'],
  {},
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
  isTagPrinted?: boolean;

  @Column('tinyint', {
    name: 'is_printed_and_heated',
    nullable: true,
    width: 1,
  })
  isPrintedAndHeated?: boolean;

  @Column('tinyint', { name: 'from_depot', nullable: true, width: 1 })
  fromDepot?: boolean;

  @Column('tinyint', { name: 'is_reversed', width: 1, default: () => "'0'" })
  isReversed: boolean;

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
  isInsertedIntoSepidar: boolean;

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
}
