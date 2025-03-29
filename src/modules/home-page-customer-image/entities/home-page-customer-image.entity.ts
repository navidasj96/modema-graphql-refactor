import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from '@/modules/product/entities/product.entity';
import { Image } from '@/modules/image/entities/image.entity';

@Index(
  'home_page_customer_images_desktop_image_id_foreign',
  ['desktopImageId'],
  {},
)
@Index(
  'home_page_customer_images_mobile_image_id_foreign',
  ['mobileImageId'],
  {},
)
@Index('home_page_customer_images_product_id_index', ['productId'], {})
@Entity('home_page_customer_images', { schema: 'modema' })
export class HomePageCustomerImage {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('int', { name: 'mobile_image_id', nullable: true, unsigned: true })
  mobileImageId?: number;

  @Column('int', { name: 'desktop_image_id', nullable: true, unsigned: true })
  desktopImageId?: number;

  @Column('int', { name: 'sort_order', unsigned: true })
  sortOrder: number;

  @Column('varchar', { name: 'desktop_image_alt', nullable: true, length: 191 })
  desktopImageAlt?: string;

  @Column('varchar', { name: 'mobile_image_alt', nullable: true, length: 191 })
  mobileImageAlt?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('int', { name: 'product_id', nullable: true, unsigned: true })
  productId?: number;

  @ManyToOne(() => Image, (image) => image.homePageCustomerImages, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'desktop_image_id', referencedColumnName: 'id' }])
  desktopImage: Image;

  @ManyToOne(() => Image, (image) => image.homePageCustomerImages2, {
    onDelete: 'NO ACTION',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'mobile_image_id', referencedColumnName: 'id' }])
  mobileImage: Image;

  @ManyToOne(() => Product, (product) => product.homePageCustomerImages, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  product: Product;
}
