import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';
import { User } from '@/modules/user/entities/user.entity';

@Index(
  'product_comment_likes_product_comment_id_index',
  ['productCommentId'],
  {}
)
@Index('product_comment_likes_user_id_index', ['userId'], {})
@Entity('product_comment_likes', { schema: 'modema' })
export class ProductCommentLike {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'product_comment_id', unsigned: true })
  productCommentId: number;

  @Column('tinyint', { name: 'is_liked', nullable: true, width: 1 })
  isLiked?: boolean;

  @Column('tinyint', { name: 'is_disliked', nullable: true, width: 1 })
  isDisliked?: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => ProductComment,
    (productComment) => productComment.productCommentLikes,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_comment_id', referencedColumnName: 'id' }])
  productComment: ProductComment;

  @ManyToOne(() => User, (users) => users.productCommentLikes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;
}
