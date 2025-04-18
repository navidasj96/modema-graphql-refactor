import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '@/modules/user/entities/user.entity';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';

@Index('transactions_approved_by_index', ['approvedBy'], {})
@Index('transactions_user_id_index', ['userId'], {})
@Entity('transactions', { schema: 'modema' })
export class Transaction {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('varchar', { name: 'model_type', length: 191 })
  modelType: string;

  @Column('int', { name: 'model_id', unsigned: true })
  modelId: number;

  @Column('decimal', {
    name: 'amount',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: number;

  @Column('decimal', {
    name: 'modema_blocked',
    comment: 'only usable by modema personnel',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  modemaBlocked: number;

  @Column('decimal', {
    name: 'user_blocked',
    comment: 'usable by user for purchase only',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  userBlocked: number;

  @Column('decimal', {
    name: 'withdrawable',
    comment: 'usable by user for purchase or withdrawal',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  withdrawable: number;

  @Column('tinyint', { name: 'approved', width: 1, default: () => "'0'" })
  approved: boolean;

  @Column('int', { name: 'approved_by', nullable: true, unsigned: true })
  approvedBy?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

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

  @ManyToOne(() => User, (user) => user.transactions, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'approved_by', referencedColumnName: 'id' }])
  approvedBy2: User;

  @ManyToOne(() => User, (user) => user.transactions2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => WalletHistory, (walletHistory) => walletHistory.transaction)
  walletHistories: WalletHistory[];
}
