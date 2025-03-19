import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BasicCarpetColor } from '@/modules/basic-carpet-color/entities/basic-carpet-color.entity';
import { Image } from '@/modules/image/entities/image.entity';
import { Product } from '@/modules/product/entities/product.entity';

@Index(
  'product_color_images_basic_carpet_color_id_index',
  ['basicCarpetColorId'],
  {},
)
@Index('product_color_images_image_id_index', ['imageId'], {})
@Index('product_color_images_product_id_index', ['productId'], {})
@Entity('product_color_images', { schema: 'modema' })
export class ProductColorImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'image_id', unsigned: true })
  imageId: number;

  @Column('int', { name: 'product_id', unsigned: true })
  productId: number;

  @Column('int', {
    name: 'basic_carpet_color_id',
    nullable: true,
    unsigned: true,
  })
  basicCarpetColorId?: number;

  @Column('int', {
    name: 'sort_order',
    nullable: true,
    unsigned: true,
    default: () => "'0'",
  })
  sortOrder?: number;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ManyToOne(
    () => BasicCarpetColor,
    (basicCarpetColor) => basicCarpetColor.productColorImages,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_color_id', referencedColumnName: 'id' }])
  basicCarpetColor: BasicCarpetColor;

  @ManyToOne(() => Image, (image) => image.productColorImages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'image_id', referencedColumnName: 'id' }])
  image: Image;

  @ManyToOne(() => Product, (product) => product.productColorImages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
