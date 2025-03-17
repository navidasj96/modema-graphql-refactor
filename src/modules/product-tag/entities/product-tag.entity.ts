import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('product_tag_product_id_index', ['productId'], {})
@Index(
  'product_tag_product_id_subproduct_id_tag_id_unique',
  ['productId', 'subproductId', 'tagId'],
  { unique: true },
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
}
