import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BasicCarpetSize } from '@/modules/basic-carpet-size/entities/basic-carpet-size.entity';
import { CampaignVotingImage } from '@/modules/campaign-voting-image/entities/campaign-voting-image.entity';
import { ColorCategory } from '@/modules/color-category/entities/color-category.entity';
import { HelpDesk } from '@/modules/help-desk/entities/help-desk.entity';
import { HomePageCustomerImage } from '@/modules/home-page-customer-image/entities/home-page-customer-image.entity';
import { ImagesSizeGuidesDetail } from '@/modules/images-size-guides-detail/entities/images-size-guides-detail.entity';
import { PatternCategory } from '@/modules/pattern-category/entities/pattern-category.entity';
import { ProductCategory } from '@/modules/product-category/entities/product-category.entity';
import { ProductColorImage } from '@/modules/product-color-image/entities/product-color-image.entity';
import { Product } from '@/modules/product/entities/product.entity';
import { ReturnRequestItemImage } from '@/modules/return-request-item-image/entities/return-request-item-image.entity';
import { SizeGuide } from '@/modules/size-guide/entities/size-guide.entity';
import { SizeGuidesDetail } from '@/modules/size-guides-detail/entities/size-guides-detail.entity';
import { SubproductSpecialImage } from '@/modules/subproduct-special-image/entities/subproduct-special-image.entity';
import { Subproduct } from '@/modules/subproduct/entities/subproduct.entity';
import { Tag } from '@/modules/tag/entities/tag.entity';
import { CustomerImageProduct } from '@/modules/customer-image-product/entities/customer-image-product.entity';
import { ImageProduct } from '@/modules/image-product/entities/image-product.entity';
import { ImageSubproduct } from '@/modules/image-subproduct/entities/image-subproduct.entity';

@Entity('images', { schema: 'modema' })
export class Image {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'filename', length: 191 })
  filename: string;

  @Column('varchar', { name: 'mime', length: 191 })
  mime: string;

  @Column('varchar', { name: 'original_filename', length: 191 })
  originalFilename: string;

  @Column('varchar', { name: 'upload_source', length: 191 })
  uploadSource: string;

  @Column('varchar', { name: 'path', length: 191, default: () => "'/'" })
  path: string;

  @Column('varchar', { name: 'alt_text', nullable: true, length: 766 })
  altText?: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt?: Date;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @Column('tinyint', {
    name: 'image_recreated',
    width: 1,
    default: () => "'0'",
  })
  imageRecreated: boolean;

  @Column('varchar', { name: 'alt_text_en', nullable: true, length: 191 })
  altTextEn?: string;

  @OneToMany(() => BasicCarpetSize, (basicCarpetSize) => basicCarpetSize.image)
  basicCarpetSizes: BasicCarpetSize[];

  @OneToMany(
    () => BasicCarpetSize,
    (basicCarpetSize) => basicCarpetSize.mobileImage,
  )
  basicCarpetSizes2: BasicCarpetSize[];

  @OneToMany(
    () => CampaignVotingImage,
    (campaignVotingImage) => campaignVotingImage.image,
  )
  campaignVotingImages: CampaignVotingImage[];

  @OneToMany(
    () => ColorCategory,
    (colorCategory) => colorCategory.homepageImage,
  )
  colorCategories: ColorCategory[];

  @OneToMany(() => ColorCategory, (colorCategory) => colorCategory.image)
  colorCategories2: ColorCategory[];

  @OneToMany(() => ColorCategory, (colorCategory) => colorCategory.mobileImage)
  colorCategories3: ColorCategory[];

  @OneToMany(
    () => CustomerImageProduct,
    (customerImageProduct) => customerImageProduct.image,
  )
  customerImageProducts: CustomerImageProduct[];

  @OneToMany(() => HelpDesk, (helpDesk) => helpDesk.image)
  helpDesks: HelpDesk[];

  @OneToMany(
    () => HomePageCustomerImage,
    (homePageCustomerImage) => homePageCustomerImage.desktopImage,
  )
  homePageCustomerImages: HomePageCustomerImage[];

  @OneToMany(
    () => HomePageCustomerImage,
    (homePageCustomerImage) => homePageCustomerImage.mobileImage,
  )
  homePageCustomerImages2: HomePageCustomerImage[];

  @OneToMany(() => ImageProduct, (imageProduct) => imageProduct.image)
  imageProducts: ImageProduct[];

  @OneToMany(() => ImageSubproduct, (imageSubproduct) => imageSubproduct.image)
  imageSubproducts: ImageSubproduct[];

  @OneToMany(
    () => ImagesSizeGuidesDetail,
    (imagesSizeGuidesDetail) => imagesSizeGuidesDetail.image,
  )
  imagesSizeGuidesDetails: ImagesSizeGuidesDetail[];

  @OneToMany(() => PatternCategory, (patternCategory) => patternCategory.image)
  patternCategories: PatternCategory[];

  @OneToMany(
    () => ProductCategory,
    (productCategory) => productCategory.homepageImage,
  )
  productCategories: ProductCategory[];

  @OneToMany(() => ProductCategory, (productCategory) => productCategory.image)
  productCategories2: ProductCategory[];

  @OneToMany(
    () => ProductCategory,
    (productCategory) => productCategory.mobileImage,
  )
  productCategories3: ProductCategory[];

  @OneToMany(
    () => ProductColorImage,
    (productColorImage) => productColorImage.image,
  )
  productColorImages: ProductColorImage[];

  @OneToMany(() => Product, (product) => product.image)
  products: Product[];

  @OneToMany(
    () => ReturnRequestItemImage,
    (returnRequestItemImage) => returnRequestItemImage.image,
  )
  returnRequestItemImages: ReturnRequestItemImage[];

  @OneToMany(() => SizeGuide, (sizeGuide) => sizeGuide.image)
  sizeGuides: SizeGuide[];

  @OneToMany(
    () => SizeGuidesDetail,
    (sizeGuidesDetail) => sizeGuidesDetail.image,
  )
  sizeGuidesDetails: SizeGuidesDetail[];

  @OneToMany(
    () => SubproductSpecialImage,
    (subproductSpecialImage) => subproductSpecialImage.image,
  )
  subproductSpecialImages: SubproductSpecialImage[];

  @OneToMany(() => Subproduct, (subproduct) => subproduct.image)
  subproducts: Subproduct[];

  @OneToMany(() => Tag, (tag) => tag.sliderImage)
  tags: Tag[];

  @OneToMany(() => Tag, (tag) => tag.image)
  tags2: Tag[];
}
