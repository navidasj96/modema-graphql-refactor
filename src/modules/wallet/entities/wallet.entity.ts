import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RetargetingWalletCharge } from '@/modules/retargeting-wallet-charge/entities/retargeting-wallet-charge.entity';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/entities/wallet-gift-charge.entity';
import { WalletHistory } from '@/modules/wallet-history/entities/wallet-history.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index('wallets_user_id_index', ['userId'], { unique: true })
@Entity('wallets', { schema: 'modema' })
export class Wallet {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unique: true, unsigned: true })
  userId: number;

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

  @Column('tinyint', {
    name: 'not_usable_for_low_total_prices',
    width: 1,
    default: () => "'0'",
  })
  notUsableForLowTotalPrices: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => RetargetingWalletCharge,
    (retargetingWalletCharge) => retargetingWalletCharge.wallet,
  )
  retargetingWalletCharges: RetargetingWalletCharge[];

  @OneToMany(
    () => WalletGiftCharge,
    (walletGiftCharge) => walletGiftCharge.wallet,
  )
  walletGiftCharges: WalletGiftCharge[];

  @OneToMany(() => WalletHistory, (walletHistory) => walletHistory.wallet)
  walletHistories: WalletHistory[];

  @OneToOne(() => User, (user) => user.wallets, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
