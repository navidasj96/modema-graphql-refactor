import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('production_pad_statuses', { schema: 'modema' })
export class ProductionPadStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('int', { name: 'step', default: () => "'1'" })
  step: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
