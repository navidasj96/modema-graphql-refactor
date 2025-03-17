import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('wallet_histories_created_by_index', ['createdBy'], {})
@Index('wallet_histories_transaction_id_index', ['transactionId'], {})
@Index('wallet_histories_wallet_id_index', ['walletId'], {})
@Entity('wallet_histories', { schema: 'modema' })
export class WalletHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'wallet_id', unsigned: true })
  walletId: number;

  @Column('int', { name: 'transaction_id', unsigned: true })
  transactionId: number;

  @Column('decimal', {
    name: 'modema_blocked',
    comment: 'only usable by modema personnel',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: string;

  @Column('decimal', {
    name: 'user_blocked',
    comment: 'usable by user for purchase only',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: string;

  @Column('decimal', {
    name: 'withdrawable',
    comment: 'usable by user for purchase or withdrawal',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: string;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
