import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

@Entity('invoice_modes', { schema: 'modema' })
export class InvoiceMode {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Invoice, (invoices) => invoices.invoiceMode)
  invoices: Invoice[];
}
