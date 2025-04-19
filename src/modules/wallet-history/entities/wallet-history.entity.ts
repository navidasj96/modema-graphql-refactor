import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from '@/modules/user/entities/user.entity';
import { Transaction } from '@/modules/transaction/entities/transaction.entity';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';

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
    default: () => 0.0,
  })
  modemaBlocked: number;

  @Column('decimal', {
    name: 'user_blocked',
    comment: 'usable by user for purchase only',
    precision: 18,
    scale: 2,
    default: () => 0.0,
  })
  userBlocked: number;

  @Column('decimal', {
    name: 'withdrawable',
    comment: 'usable by user for purchase or withdrawal',
    precision: 18,
    scale: 2,
    default: () => 0.0,
  })
  withdrawable: number;

  @Column('int', { name: 'created_by', nullable: true, unsigned: true })
  createdBy?: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    precision: 0,
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.walletHistories, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'created_by', referencedColumnName: 'id' }])
  createdBy2: User;

  @ManyToOne(() => Transaction, (transaction) => transaction.walletHistories, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'transaction_id', referencedColumnName: 'id' }])
  transaction: Transaction;

  @ManyToOne(() => Wallet, (wallet) => wallet.walletHistories, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'wallet_id', referencedColumnName: 'id' }])
  wallet: Wallet;
}
