import { InvoiceProductItem } from '@/modules/invoice-product-item/entities/invoice-product-item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('print_machines', { schema: 'modema' })
export class PrintMachine {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(
    () => InvoiceProductItem,
    (invoiceProductItem) => invoiceProductItem.printMachine
  )
  invoiceProductItems: InvoiceProductItem[];
}
