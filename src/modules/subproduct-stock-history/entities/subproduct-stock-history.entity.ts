import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'subproduct_stock_histories_invoice_product_id_index',
  ['invoiceProductId'],
  {},
)
@Index('subproduct_stock_histories_subproduct_id_index', ['subproductId'], {})
@Index('subproduct_stock_histories_user_id_index', ['userId'], {})
@Entity('subproduct_stock_histories', { schema: 'modema' })
export class SubproductStockHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'subproduct_id', unsigned: true })
  subproductId: number;

  @Column('int', { name: 'invoice_product_id', nullable: true, unsigned: true })
  invoiceProductId?: number;

  @Column('int', { name: 'user_id', nullable: true, unsigned: true })
  userId?: number;

  @Column('int', { name: 'old_value' })
  oldValue: number;

  @Column('int', { name: 'new_value' })
  newValue: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
