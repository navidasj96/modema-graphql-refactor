import { ProductionReceipt } from '@/modules/production-receipt/entities/production-receipt.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('production_receipt_types', { schema: 'modema' })
export class ProductionReceiptType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductionReceipt,
    (productionReceipt) => productionReceipt.productionReceiptType
  )
  productionReceipts: ProductionReceipt[];
}
