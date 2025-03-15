import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('payment_requests_admin_user_id_index', ['adminUserId'], {})
@Index(
  'payment_requests_payment_request_status_id_index',
  ['paymentRequestStatusId'],
  {},
)
@Index('payment_requests_visitor_id_index', ['visitorId'], {})
@Entity('payment_requests', { schema: 'modema' })
export class PaymentRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'visitor_id', unsigned: true })
  visitorId: number;

  @Column('int', { name: 'admin_user_id', nullable: true, unsigned: true })
  adminUserId?: number;

  @Column('int', {
    name: 'payment_request_status_id',
    unsigned: true,
    default: () => "'1'",
  })
  paymentRequestStatusId: number;

  @Column('decimal', {
    name: 'amount',
    nullable: true,
    precision: 18,
    scale: 2,
  })
  amount?: string;

  @Column('text', { name: 'message', nullable: true })
  message?: string;

  @Column('varchar', {
    name: 'bank_account_number',
    nullable: true,
    length: 191,
  })
  bankAccountNumber?: string;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
