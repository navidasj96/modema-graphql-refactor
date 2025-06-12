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
import { ProductCommentLike } from '@/modules/product-comment-like/entities/product-comment-like.entity';
import { User } from '@/modules/user/entities/user.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { ProductRate } from '@/modules/product-rate/entities/product-rate.entity';
import { WalletGiftCharge } from '@/modules/wallet-gift-charge/entities/wallet-gift-charge.entity';

@Index('product_comments_approved_by_index', ['approvedBy'], {})
@Index('product_comments_parent_comment_id_index', ['parentCommentId'], {})
@Index('product_comments_product_id_index', ['productId'], {})
@Index('product_comments_subproduct_id_index', ['subproductId'], {})
@Index('product_comments_user_id_index', ['userId'], {})
@Entity('product_comments', { schema: 'modema' })
export class ProductComment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'parent_comment_id', nullable: true, unsigned: true })
  parentCommentId?: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'approved_by', nullable: true, unsigned: true })
  approvedBy?: number;

  @Column('longtext', { name: 'comment' })
  comment: string;

  @Column('tinyint', {
    name: 'approved',
    comment: '1=approved,2=trashed,-1=starred,unapproved=0',
    width: 1,
    default: () => "'0'",
  })
  approved: boolean;

  @Column('tinyint', { name: 'starred', width: 1, default: () => "'0'" })
  starred: boolean;

  @Column('tinyint', { name: 'is_buyer', nullable: true, width: 1 })
  isBuyer?: boolean;

  @Column('tinyint', { name: 'recommended', nullable: true, width: 1 })
  recommended?: boolean;

  @Column('int', { name: 'total_likes', default: () => "'0'" })
  totalLikes: number;

  @Column('int', { name: 'total_dislikes', default: () => "'0'" })
  totalDislikes: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @OneToMany(
    () => ProductCommentLike,
    (productCommentLikes) => productCommentLikes.productComment
  )
  productCommentLikes: ProductCommentLike[];

  @ManyToOne(() => User, (user) => user.productComments, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'approved_by', referencedColumnName: 'id' }])
  approvedBy2: User;

  @ManyToOne(
    () => ProductComment,
    (productComment) => productComment.productComments,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'parent_comment_id', referencedColumnName: 'id' }])
  parentComment: ProductComment;

  @OneToMany(
    () => ProductComment,
    (productComment) => productComment.parentComment
  )
  productComments: ProductComment[];

  @ManyToOne(() => Product, (product) => product.productComments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.productComments, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @ManyToOne(() => User, (user) => user.productComments2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @OneToMany(() => ProductRate, (productRate) => productRate.productComment)
  productRates: ProductRate[];

  @OneToOne(
    () => WalletGiftCharge,
    (walletGiftCharges) => walletGiftCharges.productComment
  )
  walletGiftCharges: WalletGiftCharge;
}
