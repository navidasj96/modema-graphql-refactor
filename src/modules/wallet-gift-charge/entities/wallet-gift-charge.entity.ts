import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Wallet } from '@/modules/wallet/entities/wallet.entity';

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

  @OneToOne(
    () => ProductComment,
    (productComment) => productComment.walletGiftCharges,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_comment_id', referencedColumnName: 'id' }])
  productComment: ProductComment;

  @ManyToOne(() => User, (user) => user.walletGiftCharges, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(() => Wallet, (wallet) => wallet.walletGiftCharges, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'wallet_id', referencedColumnName: 'id' }])
  wallet: Wallet;
}
