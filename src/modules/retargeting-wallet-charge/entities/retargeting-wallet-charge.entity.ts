import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('retargeting_wallet_charges_user_id_index', ['userId'], {})
@Index('retargeting_wallet_charges_wallet_id_index', ['walletId'], {})
@Entity('retargeting_wallet_charges', { schema: 'modema' })
export class RetargetingWalletCharge {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'wallet_id', nullable: true, unsigned: true })
  walletId?: number;

  @Column('decimal', {
    name: 'amount',
    precision: 18,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column('datetime', { name: 'last_charged_at', nullable: true })
  lastChargedAt?: Date;

  @Column('varchar', { name: 'charged_invoices', nullable: true, length: 191 })
  chargedInvoices?: string;
}
