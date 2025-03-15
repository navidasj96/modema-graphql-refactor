import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(
  'preorder_registers_money_transfer_confirmed_by_index',
  ['moneyTransferConfirmedBy'],
  {},
)
@Index('preorder_registers_payment_type_id_index', ['paymentTypeId'], {})
@Index('preorder_registers_preorder_number_index', ['preorderNumber'], {})
@Index('preorder_registers_user_id_index', ['userId'], {})
@Entity('preorder_registers', { schema: 'modema' })
export class PreorderRegister {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('tinyint', { name: 'is_paid', width: 1, default: () => "'0'" })
  isPaid: boolean;

  @Column('varchar', { name: 'preorder_number', nullable: true, length: 191 })
  preorderNumber?: string;

  @Column('datetime', { name: 'preorder_date', nullable: true })
  preorderDate?: Date;

  @Column('decimal', {
    name: 'payment_amount',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  paymentAmount: string;

  @Column('decimal', {
    name: 'withdrawn_amount',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawnAmount: string;

  @Column('varchar', { name: 'ref_id', nullable: true, length: 191 })
  refId?: string;

  @Column('varchar', { name: 'order_id', nullable: true, length: 191 })
  orderId?: string;

  @Column('varchar', { name: 'sale_ref_id', nullable: true, length: 191 })
  saleRefId?: string;

  @Column('int', { name: 'payment_type_id', nullable: true, unsigned: true })
  paymentTypeId?: number;

  @Column('tinyint', { name: 'is_confirmed', width: 1, default: () => "'0'" })
  isConfirmed: boolean;

  @Column('varchar', {
    name: 'money_transfer_ref_code',
    nullable: true,
    length: 191,
  })
  moneyTransferRefCode?: string;

  @Column('varchar', { name: 'ref_code_sales', nullable: true, length: 191 })
  refCodeSales?: string;

  @Column('int', {
    name: 'money_transfer_confirmed_by',
    nullable: true,
    unsigned: true,
  })
  moneyTransferConfirmedBy?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
