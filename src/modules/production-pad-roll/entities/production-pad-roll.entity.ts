import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';

@Index('production_pad_rolls_roll_number_unique', ['rollNumber'], {
  unique: true,
})
@Index('production_pad_rolls_bill_number_index', ['billNumber'], {})
@Index('production_pad_rolls_created_by_index', ['createdBy'], {})
@Index('production_pad_rolls_closed_by_index', ['closedBy'], {})
@Entity('production_pad_rolls', { schema: 'modema' })
export class ProductionPadRoll {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'roll_number', unique: true, length: 191 })
  rollNumber: string;

  @Column('double', { name: 'width', precision: 22, default: () => "'0'" })
  width: number;

  @Column('double', { name: 'length', precision: 22, default: () => "'0'" })
  length: number;

  @Column('double', { name: 'weight', precision: 22, default: () => "'0'" })
  weight: number;

  @Column('varchar', { name: 'bill_number', nullable: true, length: 191 })
  billNumber: string | null;

  @Column('datetime', { name: 'close_date', nullable: true })
  closeDate: Date | null;

  @Column('tinyint', { name: 'is_closed', width: 1, default: () => "'0'" })
  isClosed: number;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy: number | null;

  @Column('int', { name: 'closed_by', nullable: true, unsigned: true })
  closedBy: number | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => User, (users) => users.productionPadRolls, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'closed_by', referencedColumnName: 'id' }])
  closedBy2: User;

  @ManyToOne(() => User, (user) => user.productionPadRolls2, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
  createdBy2: User;
}
