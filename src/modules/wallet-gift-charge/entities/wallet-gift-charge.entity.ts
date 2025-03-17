import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('wallet_gift_charges_product_comment_id_unique', ['productCommentId'], {
  unique: true,
})
@Index('wallet_gift_charges_user_id_index', ['userId'], {})
@Index('wallet_gift_charges_wallet_id_index', ['walletId'], {})
@Entity('wallet_gift_charges', { schema: 'modema' })
export class WalletGiftCharge {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'wallet_id', unsigned: true })
  walletId: number;

  @Column('int', { name: 'product_comment_id', unique: true, unsigned: true })
  productCommentId: number;

  @Column('decimal', {
    name: 'amount',
    precision: 8,
    scale: 2,
    default: () => "'0.00'",
  })
  amount: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
