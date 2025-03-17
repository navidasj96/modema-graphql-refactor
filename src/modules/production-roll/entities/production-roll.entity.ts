import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('production_rolls_bill_number_index', ['billNumber'], {})
@Index('production_rolls_closed_by_index', ['closedBy'], {})
@Index('production_rolls_created_by_index', ['createdBy'], {})
@Index('production_rolls_roll_number_unique', ['rollNumber'], { unique: true })
@Entity('production_rolls', { schema: 'modema' })
export class ProductionRoll {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'roll_number', unique: true, length: 191 })
  rollNumber: string;

  @Column('double', { name: 'width', precision: 10, scale: 2, default: 0 }) // ✅ Fixed precision & default value
  width: number;

  @Column('double', { name: 'length', precision: 10, scale: 2, default: 0 }) // ✅ Fixed precision & default value
  length: number;

  @Column('double', { name: 'weight', precision: 10, scale: 2, default: 0 }) // ✅ Fixed precision & default value
  weight: number;

  @Column('varchar', { name: 'bill_number', nullable: true, length: 191 })
  billNumber?: string;

  @Column('datetime', { name: 'close_date', nullable: true })
  closeDate?: Date;

  @Column('tinyint', { name: 'is_shaggy', default: 0 })
  isShaggy: boolean;

  @Column('varchar', { name: 'shaggy_color', nullable: true, length: 191 })
  shaggyColor?: string;

  @Column('tinyint', { name: 'is_closed', default: 0 })
  isClosed: boolean;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt?: Date;

  @Column('timestamp', {
    name: 'updated_at',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updatedAt?: Date;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy?: number;

  @Column('int', { name: 'closed_by', nullable: true, unsigned: true })
  closedBy?: number;
}
