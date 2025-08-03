import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { IncredibleOfferPure } from '@/modules/incredible-offer/domain/incredible-offer.pure';
import { ProductColorImagePure } from '@/modules/product-color-image/domain/product-color-image.pure';
import { ProductColorSalePure } from '@/modules/product-color-sale/domain/product-color-sale.pure';
import { ProductVideoPure } from '@/modules/product-video/domain/product-video.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { TorobProductPure } from '@/modules/torob-product/domain/torob-product.pure';

@InputType('BasicCarpetColorPureDomain')
@ObjectType()
export class BasicCarpetColorPure {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  shortCode?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  russianTitle?: string;

  @Field({ nullable: true })
  persianTitle?: string;

  @Field({ nullable: true })
  englishTitle?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  spanishTitle?: string;

  @Field(() => [IncredibleOfferPure])
  incredibleOffers: IncredibleOfferPure[];

  @Field(() => [ProductColorImagePure])
  productColorImages: ProductColorImagePure[];

  @Field(() => [ProductColorSalePure])
  productColorSales: ProductColorSalePure[];

  @Field(() => [ProductVideoPure])
  productVideos: ProductVideoPure[];

  @Field(() => [ProductPure])
  products: ProductPure[];

  @Field(() => [SubproductPure])
  subproducts: SubproductPure[];

  @Field(() => [TorobProductPure])
  torobProducts: TorobProductPure[];
}
