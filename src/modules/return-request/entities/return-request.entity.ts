import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('return_requests_coupon_id_index', ['couponId'], {})
@Index('return_requests_invoice_id_index', ['invoiceId'], {})
@Index('return_requests_parent_id_unique', ['parentId'], { unique: true })
@Index('return_requests_request_date_index', ['requestDate'], {})
@Index('return_requests_request_number_unique', ['requestNumber'], {
  unique: true,
})
@Index('return_requests_return_status_id_index', ['returnStatusId'], {})
@Index('return_requests_return_type_id_index', ['returnTypeId'], {})
@Index('return_requests_user_id_index', ['userId'], {})
@Entity('return_requests', { schema: 'modema' })
export class ReturnRequest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('date', { name: 'request_date' })
  requestDate: string;

  @Column('varchar', { name: 'request_number', unique: true, length: 191 })
  requestNumber: string;

  @Column('int', { name: 'return_status_id', unsigned: true })
  returnStatusId: number;

  @Column('int', { name: 'return_type_id', unsigned: true })
  returnTypeId: number;

  @Column('int', { name: 'invoice_id', nullable: true, unsigned: true })
  invoiceId?: number;

  @Column('int', {
    name: 'parent_id',
    nullable: true,
    unique: true,
    unsigned: true,
  })
  parentId?: number;

  @Column('varchar', {
    name: 'tracking_code_customer',
    nullable: true,
    length: 191,
  })
  trackingCodeCustomer?: string;

  @Column('varchar', {
    name: 'shipping_service_customer',
    nullable: true,
    length: 191,
  })
  shippingServiceCustomer?: string;

  @Column('varchar', {
    name: 'tracking_code_modema',
    nullable: true,
    length: 191,
  })
  trackingCodeModema?: string;

  @Column('varchar', {
    name: 'shipping_service_modema',
    nullable: true,
    length: 191,
  })
  shippingServiceModema?: string;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('decimal', {
    name: 'withdrawable',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: string;

  @Column('decimal', {
    name: 'user_blocked',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: string;

  @Column('decimal', {
    name: 'modema_blocked',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: string;

  @Column('decimal', {
    name: 'coupon_amount',
    nullable: true,
    unsigned: true,
    precision: 18,
    scale: 2,
  })
  couponAmount?: string;

  @Column('int', { name: 'coupon_id', nullable: true, unsigned: true })
  couponId?: number;

  @Column('tinyint', {
    name: 'submitted_by_factory',
    width: 1,
    default: () => "'0'",
  })
  submittedByFactory: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
