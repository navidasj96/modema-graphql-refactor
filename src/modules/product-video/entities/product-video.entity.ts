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
import { Video } from '@/modules/video/entities/video.entity';

@Index('product_video_basic_carpet_color_id_index', ['basicCarpetColorId'], {})
@Index('product_video_product_id_index', ['productId'], {})
@Index('product_video_video_id_index', ['videoId'], {})
@Index('product_video_video_id_product_id_unique', ['videoId', 'productId'], {
  unique: true,
})
@Entity('product_video', { schema: 'modema' })
export class ProductVideo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'video_id', unsigned: true })
  videoId: number;

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
    (basicCarpetColor) => basicCarpetColor.productVideos,
    { onDelete: 'SET NULL', onUpdate: 'CASCADE' },
  )
  @JoinColumn([{ name: 'basic_carpet_color_id', referencedColumnName: 'id' }])
  basicCarpetColor: BasicCarpetColor;

  @ManyToOne(() => Product, (product) => product.productVideos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;

  @ManyToOne(() => Video, (video) => video.productVideos, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'video_id', referencedColumnName: 'id' }])
  video: Video;
}
