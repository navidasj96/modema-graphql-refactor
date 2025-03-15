import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('invoice_address_validation_results_address_id_index', ['addressId'], {})
@Index('invoice_address_validation_results_invoice_id_index', ['invoiceId'], {})
@Entity('invoice_address_validation_results', { schema: 'modema' })
export class InvoiceAddressValidationResult {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'invoice_id', unsigned: true })
  invoiceId: number;

  @Column('int', { name: 'address_id', unsigned: true })
  addressId: number;

  @Column('longtext', { name: 'address_validation_result' })
  addressValidationResult: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
