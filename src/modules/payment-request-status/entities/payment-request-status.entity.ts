import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentRequest } from '@/modules/payment-request/entities/payment-request.entity';

@Entity('payment_request_statuses', { schema: 'modema' })
export class PaymentRequestStatus {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'name', length: 191 })
  name: string;

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

  @OneToMany(
    () => PaymentRequest,
    (paymentRequest) => paymentRequest.paymentRequestStatus
  )
  paymentRequests: PaymentRequest[];
}
