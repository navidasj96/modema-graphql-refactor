import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IncredibleOffer } from '@/modules/incredible-offer/entities/incredible-offer.entity';
import { ProductColorImage } from '@/modules/product-color-image/entities/product-color-image.entity';
import { ProductColorSale } from '@/modules/product-color-sale/entities/product-color-sale.entity';
import { ProductVideo } from '@/modules/product-video/entities/product-video.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { TorobProduct } from '@/modules/torob-product/entities/torob-product.entity';

@Index('basic_carpet_colors_code_unique', ['code'], { unique: true })
@Index('basic_carpet_colors_russian_title_unique', ['russianTitle'], {
  unique: true,
})
@Index('basic_carpet_colors_short_code_unique', ['shortCode'], { unique: true })
@Index('basic_carpet_colors_spanish_title_unique', ['spanishTitle'], {
  unique: true,
})
@Index('basic_carpet_colors_title_unique', ['title'], { unique: true })
@Index('sort_order', ['sortOrder'], {})
@Entity('basic_carpet_colors', { schema: 'modema' })
export class BasicCarpetColor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'title', unique: true, length: 191 })
  title: string;

  @Column('varchar', { name: 'code', unique: true, length: 2 })
  code: string;

  @Column('varchar', {
    name: 'short_code',
    nullable: true,
    unique: true,
    length: 191,
  })
  shortCode?: string;

  @Column('varchar', { name: 'color_code', nullable: true, length: 191 })
  colorCode?: string;

  @Column('varchar', {
    name: 'russian_title',
    nullable: true,
    unique: true,
    length: 191,
  })
  russianTitle?: string;

  @Column('varchar', { name: 'persian_title', nullable: true, length: 191 })
  persianTitle?: string;

  @Column('varchar', { name: 'english_title', nullable: true, length: 191 })
  englishTitle?: string;

  @Column('int', { name: 'sort_order', nullable: true, unsigned: true })
  sortOrder?: number;

  @Column('tinyint', { name: 'is_active', width: 1, default: () => "'1'" })
  isActive: boolean;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('varchar', {
    name: 'spanish_title',
    nullable: true,
    unique: true,
    length: 191,
  })
  spanishTitle?: string;

  @OneToMany(
    () => IncredibleOffer,
    (incredibleOffer) => incredibleOffer.basicCarpetColor,
  )
  incredibleOffers: IncredibleOffer[];

  @OneToMany(
    () => ProductColorImage,
    (productColorImage) => productColorImage.basicCarpetColor,
  )
  productColorImages: ProductColorImage[];

  @OneToMany(
    () => ProductColorSale,
    (productColorSale) => productColorSale.basicCarpetColor,
  )
  productColorSales: ProductColorSale[];

  @OneToMany(
    () => ProductVideo,
    (productVideo) => productVideo.basicCarpetColor,
  )
  productVideos: ProductVideo[];

  @OneToMany(() => Product, (products) => products.bestSellerColor)
  products: Product[];

  @OneToMany(() => Subproduct, (subproduct) => subproduct.basicCarpetColor)
  subproducts: Subproduct[];

  @OneToMany(
    () => TorobProduct,
    (torobProduct) => torobProduct.basicCarpetColor,
  )
  torobProducts: TorobProduct[];
}
