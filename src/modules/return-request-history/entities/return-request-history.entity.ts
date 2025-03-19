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
import { User } from '@/modules/user/entities/user.entity';
import { Invoice } from '@/modules/invoice/entities/invoice.entity';
import { ReturnRequest } from '@/modules/return-request/entities/return-request.entity';
import { ReturnStatus } from '@/modules/return-status/entities/return-status.entity';
import { ReturnType } from '@/modules/return-type/entities/return-type.entity';
import { ReturnRequestItemHistory } from '@/modules/return-request-item-history/entities/return-request-item-history.entity';

@Index('return_request_histories_editor_user_id_index', ['editorUserId'], {})
@Index('return_request_histories_invoice_id_index', ['invoiceId'], {})
@Index('return_request_histories_parent_id_unique', ['parentId'], {
  unique: true,
})
@Index('return_request_histories_request_date_index', ['requestDate'], {})
@Index(
  'return_request_histories_return_request_id_index',
  ['returnRequestId'],
  {},
)
@Index(
  'return_request_histories_return_status_id_index',
  ['returnStatusId'],
  {},
)
@Index('return_request_histories_return_type_id_index', ['returnTypeId'], {})
@Index('return_request_histories_user_id_index', ['userId'], {})
@Entity('return_request_histories', { schema: 'modema' })
export class ReturnRequestHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'editor_user_id', unsigned: true })
  editorUserId: number;

  @Column('int', { name: 'return_request_id', unsigned: true })
  returnRequestId: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('date', { name: 'request_date' })
  requestDate: string;

  @Column('varchar', { name: 'request_number', length: 191 })
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
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable?: string;

  @Column('decimal', {
    name: 'user_blocked',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked?: string;

  @Column('decimal', {
    name: 'modema_blocked',
    nullable: true,
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => User, (user) => user.returnRequestHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'editor_user_id', referencedColumnName: 'id' }])
  editorUser: User;

  @ManyToOne(() => Invoice, (invoice) => invoice.returnRequestHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'invoice_id', referencedColumnName: 'id' }])
  invoice: Invoice;

  @OneToOne(
    () => ReturnRequest,
    (returnRequest) => returnRequest.returnRequestHistories,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'parent_id', referencedColumnName: 'id' }])
  parent: ReturnRequest;

  @ManyToOne(
    () => ReturnStatus,
    (returnStatus) => returnStatus.returnRequestHistories,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'return_status_id', referencedColumnName: 'id' }])
  returnStatus: ReturnStatus;

  @ManyToOne(
    () => ReturnType,
    (returnType) => returnType.returnRequestHistories,
    {
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'return_type_id', referencedColumnName: 'id' }])
  returnType: ReturnType;

  @ManyToOne(() => User, (user) => user.returnRequestHistories2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(
    () => ReturnRequestItemHistory,
    (returnRequestItemHistory) => returnRequestItemHistory.returnRequestHistory,
  )
  returnRequestItemHistories: ReturnRequestItemHistory[];
}
