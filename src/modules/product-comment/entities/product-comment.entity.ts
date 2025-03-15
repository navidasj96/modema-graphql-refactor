import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

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
}
