import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InvoicePayment } from '@/modules/invoice-payment/entities/invoice-payment.entity';
import { PreorderRegister } from '@/modules/preorder-register/entities/preorder-register.entity';
import { InvoicePaymentHistory } from '@/modules/invoice-payment-history/entities/invoice-payment-history.entity';

@Entity('invoice_payment_types', { schema: 'modema' })
export class InvoicePaymentType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => InvoicePaymentHistory,
    (invoicePaymentHistory) => invoicePaymentHistory.invoicePaymentType
  )
  invoicePaymentHistories: InvoicePaymentHistory[];

  @OneToMany(
    () => InvoicePayment,
    (invoicePayment) => invoicePayment.invoicePaymentType
  )
  invoicePayments: InvoicePayment[];

  @OneToMany(
    () => PreorderRegister,
    (preorderRegister) => preorderRegister.paymentType
  )
  preorderRegisters: PreorderRegister[];
}
