import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('return_reasons', { schema: 'modema' })
export class ReturnReason {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'reason', length: 191 })
  reason: string;

  @Column('int', { name: 'sort_order', default: () => "'0'" })
  sortOrder: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
