import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
  amount: string;

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

  @Column('tinyint', { name: 'approved', width: 1, default: () => "'0'" })
  approved: boolean;

  @Column('int', { name: 'approved_by', nullable: true, unsigned: true })
  approvedBy?: number;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
