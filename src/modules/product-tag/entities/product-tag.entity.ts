import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Tag } from '@/modules/tag/entities/tag.entity';

@Index('product_tag_product_id_index', ['productId'], {})
@Index(
  'product_tag_product_id_subproduct_id_tag_id_unique',
  ['productId', 'subproductId', 'tagId'],
  { unique: true }
)
@Index('product_tag_subproduct_id_index', ['subproductId'], {})
@Index('product_tag_tag_id_index', ['tagId'], {})
@Entity('product_tag', { schema: 'modema' })
export class ProductTag {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'subproduct_id', nullable: true, unsigned: true })
  subproductId?: number;

  @Column('int', { name: 'tag_id', unsigned: true })
  tagId: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(() => Product, (products) => products.productTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Subproduct, (subproduct) => subproduct.productTags, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'subproduct_id', referencedColumnName: 'id' }])
  subproduct: Subproduct;

  @ManyToOne(() => Tag, (tag) => tag.productTags, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'tag_id', referencedColumnName: 'id' }])
  tag: Tag;
}
