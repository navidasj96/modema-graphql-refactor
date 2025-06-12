import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvoiceProduct } from '@/modules/invoice-product/entities/invoice-product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'subproduct_stock_histories_invoice_product_id_index',
  ['invoiceProductId'],
  {}
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

  @ManyToOne(
    () => InvoiceProduct,
    (invoiceProduct) => invoiceProduct.subproductStockHistories,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'invoice_product_id', referencedColumnName: 'id' }])
  invoiceProduct: InvoiceProduct;

  @ManyToOne(
    () => Subproduct,
    (subproduct) => subproduct.subproductStockHistories,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @ManyToOne(() => User, (user) => user.subproductStockHistories, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
