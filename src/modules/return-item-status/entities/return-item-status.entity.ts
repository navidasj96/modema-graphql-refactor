import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('return_item_statuses_name_unique', ['name'], { unique: true })
@Entity('return_item_statuses', { schema: 'modema' })
export class ReturnItemStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', unique: true, length: 191 })
  name: string;

  @Column('int', { name: 'step_test', nullable: true })
  stepTest?: number;

  @Column('int', { name: 'step_guarantee', nullable: true })
  stepGuarantee?: number;

  @Column('int', { name: 'sort_order', default: () => "'1'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
