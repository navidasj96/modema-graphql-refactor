import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { Discount } from '@/modules/discount/entities/discount.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index(
  'incredible_offers_basic_carpet_color_id_index',
  ['basicCarpetColorId'],
  {}
)
@Index('incredible_offers_discount_id_index', ['discountId'], {})
@Index('incredible_offers_product_id_index', ['productId'], {})
@Entity('incredible_offers', { schema: 'modema' })
export class IncredibleOffer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('date', { name: 'offer_date' })
  offerDate: string;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'basic_carpet_color_id', unsigned: true })
  basicCarpetColorId: number;

  @Column('int', { name: 'discount_id', nullable: true, unsigned: true })
  discountId?: number;

  @Column('tinyint', { name: 'discount_percent', default: () => "'10'" })
  discountPercent: number;

  @Column('smallint', { name: 'count', default: () => "'0'" })
  count: number;

  @Column('smallint', { name: 'sold_count', default: () => "'0'" })
  soldCount: number;

  @Column('tinyint', { name: 'is_fake', width: 1, default: () => "'0'" })
  isFake: boolean;

  @Column('smallint', { name: 'sort_order' })
  sortOrder: number;

  @Column('int', {
    name: 'place',
    nullable: true,
    comment: '0: -, 1: آشپزخانه, 2: راهرو, 3: اتاق خواب, 4: پذیرایی',
  })
  place?: number;

  @ManyToOne(
    () => BasicCarpetColor,
    (basicCarpetColor) => basicCarpetColor.incredibleOffers,
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' }
  )
  @JoinColumn([{ name: 'basic_carpet_color_id', referencedColumnName: 'id' }])
  basicCarpetColor: BasicCarpetColor;

  @ManyToOne(() => Discount, (discount) => discount.incredibleOffers, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  discount: Discount;

  @ManyToOne(() => Product, (product) => product.incredibleOffers, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
