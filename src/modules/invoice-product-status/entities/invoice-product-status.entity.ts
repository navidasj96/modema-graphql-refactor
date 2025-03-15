import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice_product_statuses', { schema: 'modema' })
export class InvoiceProductStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'status', length: 191 })
  status: string;

  @Column('int', { name: 'step', nullable: true, default: () => "'1'" })
  step: number | null;

  @Column('int', { name: 'step_shaggy', nullable: true })
  stepShaggy: number | null;

  @Column('varchar', { name: 'color', length: 191 })
  color: string;

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
}
