import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReturnRequestAddress } from '@/modules/return-request-address/entities/return-request-address.entity';
import { ReturnRequestHistory } from '@/modules/return-request-history/entities/return-request-history.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';
import { ReturnRequestItem } from '@/modules/return-request-item/entities/return-request-item.entity';
import { ReturnRequestReturnStatus } from '@/modules/return-request-return-status/entities/return-request-return-status.entity';
import { Coupon } from '@/modules/coupon/entities/coupon.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ReturnStatus } from '@/modules/return-status/entities/return-status.entity';
import { ReturnType } from '@/modules/return-type/entities/return-type.entity';
import { User } from '@/modules/user/entities/user.entity';

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

  @OneToMany(
    () => ReturnRequestAddress,
    (returnRequestAddress) => returnRequestAddress.returnRequest,
  )
  returnRequestAddresses: ReturnRequestAddress[];

  @OneToOne(
    () => ReturnRequestHistory,
    (returnRequestHistory) => returnRequestHistory.parent,
  )
  returnRequestHistories: ReturnRequestHistory;

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.returnRequest,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];

  @OneToMany(
    () => ReturnRequestItem,
    (returnRequestItem) => returnRequestItem.returnRequest,
  )
  returnRequestItems: ReturnRequestItem[];

  @OneToMany(
    () => ReturnRequestReturnStatus,
    (returnRequestReturnStatus) => returnRequestReturnStatus.returnRequest,
  )
  returnRequestReturnStatuses: ReturnRequestReturnStatus[];

  @ManyToOne(() => Coupon, (coupons) => coupons.returnRequests, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'coupon_id', referencedColumnName: 'id' }])
  coupon: Coupon;

  @ManyToOne(() => Invoice, (invoice) => invoice.returnRequests, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @OneToOne(
    () => ReturnRequest,
    (returnRequest) => returnRequest.returnRequests,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'parent_id', referencedColumnName: 'id' }])
  parent: ReturnRequest;

  @OneToOne(() => ReturnRequest, (returnRequest) => returnRequest.parent)
  returnRequests: ReturnRequest;

  @ManyToOne(
    () => ReturnStatus,
    (returnStatus) => returnStatus.returnRequests,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'return_status_id', referencedColumnName: 'id' }])
  returnStatus: ReturnStatus;

  @ManyToOne(() => ReturnType, (returnType) => returnType.returnRequests, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'return_type_id', referencedColumnName: 'id' }])
  returnType: ReturnType;

  @ManyToOne(() => User, (user) => user.returnRequests, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
