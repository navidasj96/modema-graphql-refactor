import { ProductionRoll } from '@/modules/production-roll/entities/production-roll.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('production_receipts_receipt_number_unique', ['receiptNumber'], {
  unique: true,
})
@Index(
  'production_receipts_production_receipt_type_id_index',
  ['productionReceiptTypeId'],
  {}
)
@Index('production_receipts_production_roll_id_index', ['productionRollId'], {})
@Entity('production_receipts', { schema: 'modema' })
export class ProductionReceipt {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'production_receipt_type_id', unsigned: true })
  productionReceiptTypeId: number;

  @Column('int', { name: 'production_roll_id', unsigned: true })
  productionRollId: number;

  @Column('varchar', {
    name: 'receipt_number',
    nullable: true,
    unique: true,
    length: 191,
  })
  receiptNumber: string | null;

  @Column('date', { name: 'receipt_date', default: () => 'CURRENT_TIMESTAMP' })
  receiptDate: string;

  @Column('int', { name: 'count', default: () => "'0'" })
  count: number;

  @Column('double', { name: 'weight', precision: 22, default: () => "'0'" })
  weight: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => ProductionRoll, (roll) => roll.productionReceipts, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'production_roll_id', referencedColumnName: 'id' }])
  productionRoll: ProductionRoll;
}
