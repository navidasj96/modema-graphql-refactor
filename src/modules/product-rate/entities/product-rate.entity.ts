import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '@/modules/product/entities/product.entity';
import { Rate } from '@/modules/rate/entities/rate.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { User } from '@/modules/user/entities/user.entity';
import { ProductComment } from '@/modules/product-comment/entities/product-comment.entity';

@Index('product_rate_product_comment_id_index', ['productCommentId'], {})
@Index(
  'product_rate_rate_id_product_comment_id_unique',
  ['rateId', 'productCommentId'],
  { unique: true }
)
@Index('product_rates_product_id_index', ['productId'], {})
@Index('product_rates_rate_id_index', ['rateId'], {})
@Index('product_rates_subproduct_id_index', ['subproductId'], {})
@Index('product_rates_user_id_index', ['userId'], {})
@Entity('product_rate', { schema: 'modema' })
export class ProductRate {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'user_id', unsigned: true })
  userId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'rate_id', nullable: true, unsigned: true })
  rateId?: number;

  @Column('double', {
    name: 'rate_value',
    unsigned: true,
    precision: 6,
    scale: 2,
  })
  rateValue: number;

  @Column('int', { name: 'product_comment_id', nullable: true, unsigned: true })
  productCommentId?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('double', {
    name: 'old_rate',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  oldRate?: number;

  @ManyToOne(() => Product, (product) => product.productRates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Rate, (rate) => rate.productRates, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'rate_id', referencedColumnName: 'id' }])
  rate: Rate;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.productRates, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @ManyToOne(() => User, (user) => user.productRates, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  user: User;

  @ManyToOne(
    () => ProductComment,
    (productComment) => productComment.productRates,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'product_comment_id', referencedColumnName: 'id' }])
  productComment: ProductComment;
}
