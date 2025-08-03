import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SubproductPureInput')
@ObjectType('SubproductPureDomain')
export class SubproductPure {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  videoId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field(() => Number, { nullable: true })
  price: number | null;

  @Field()
  padPrice: string;

  @Field({ nullable: true })
  bundlePrice?: string;

  @Field({ nullable: true })
  bundlePadPrice?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  saleCount: number;

  @Field()
  totalLike: number;

  @Field()
  totalDislike: number;

  @Field()
  rate: number;

  @Field({ nullable: true })
  rateCount?: number;

  @Field()
  size: number;

  @Field()
  sizeIsCustomizable: number;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  length?: number;

  @Field({ nullable: true })
  colors?: string;

  @Field({ nullable: true })
  basicCarpetTypeId?: number;

  @Field({ nullable: true })
  basicCarpetDesignId?: number;

  @Field({ nullable: true })
  basicCarpetDesignerId?: number;

  @Field({ nullable: true })
  basicCarpetMaterialId?: number;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
  code?: string;

  @Field({ nullable: true })
  shortCode?: string;

  @Field({ nullable: true })
  basicCarpetBrandId?: number;

  @Field({ nullable: true })
  basicCarpetBorderId?: number;

  @Field({ nullable: true })
  borderColor?: string;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  stockCount?: number;

  @Field()
  isOutOfStock: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  mainImageChanged?: number;

  @Field()
  otherImagesChanged: number;

  @Field({ nullable: true })
  colorCategoriesChanged?: number;

  @Field({ nullable: true })
  sepidarId?: number;

  @Field()
  getStockCountFromSepidar: number;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  searchNameEn?: string;

  @Field({ nullable: true })
  colorNameEs?: string;

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;
}
