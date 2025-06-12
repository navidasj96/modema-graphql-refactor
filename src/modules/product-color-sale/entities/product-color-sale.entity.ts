import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index(
  'product_color_sales_basic_carpet_color_id_index',
  ['basicCarpetColorId'],
  {}
)
@Index(
  'product_color_sales_product_id_basic_carpet_color_id_unique',
  ['productId', 'basicCarpetColorId'],
  { unique: true }
)
@Index('product_color_sales_product_id_index', ['productId'], {})
@Entity('product_color_sales', { schema: 'modema' })
export class ProductColorSale {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', { name: 'basic_carpet_color_id', unsigned: true })
  basicCarpetColorId: number;

  @Column('int', { name: 'sale_count', default: 0 })
  saleCount: number;

  @Column('int', { name: 'sale_count_year', default: 0 })
  saleCountYear: number;

  // ✅ FIX: Corrected DOUBLE precision & removed invalid default value
  @Column('double', {
    name: 'average_sale_count',
    precision: 22,
    scale: 2, // Corrected scale value
    default: 0, // Removed incorrect string syntax
  })
  averageSaleCount: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetColor,
    (basicCarpetColor) => basicCarpetColor.productColorSales,
    { onDelete: 'NO ACTION', onUpdate: 'CASCADE' }
  )
  @JoinColumn([{ name: 'basic_carpet_color_id', referencedColumnName: 'id' }])
  basicCarpetColor: BasicCarpetColor;

  @ManyToOne(() => Product, (product) => product.productColorSales, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
