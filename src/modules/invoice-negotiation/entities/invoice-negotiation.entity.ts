import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_negotiation_invoice_id_index', ['invoiceId'], {})
@Index('invoice_negotiation_negotiation_id_index', ['negotiationId'], {})
@Entity('invoice_negotiation', { schema: 'modema' })
export class InvoiceNegotiation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'negotiation_id', unsigned: true })
  negotiationId: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
