import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';

@Entity('invoice_payment_statuses', { schema: 'modema' })
export class InvoicePaymentStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.invoicePaymentStatus)
  invoices: Invoice[];

  @OneToMany(() => Invoice, (invoice) => invoice.replacementPaymentStatus)
  invoices2: Invoice[];
}
