import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  IDField,
  PagingStrategies,
  QueryOptions,
} from '@ptc-org/nestjs-query-graphql';
import { IncredibleOffer } from '@/modules/incredible-offer/domain/incredible-offer';
import { ProductColorImage } from '@/modules/product-color-image/domain/product-color-image';
import { ProductColorSale } from '@/modules/product-color-sale/domain/product-color-sale';
import { ProductVideo } from '@/modules/product-video/domain/product-video';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { TorobProduct } from '@/modules/torob-product/domain/torob-product';

@InputType('BasicCarpetColorDomain')
@QueryOptions({
  pagingStrategy: PagingStrategies.NONE,
})
@ObjectType()
export class BasicCarpetColor {
  @IDField(() => ID)
  id: number;

  @FilterableField()
  title: string;

  @FilterableField()
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

  @FilterableField({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  spanishTitle?: string;

  @Field(() => [IncredibleOffer])
  incredibleOffers: IncredibleOffer[];

  @Field(() => [ProductColorImage])
  productColorImages: ProductColorImage[];

  @Field(() => [ProductColorSale])
  productColorSales: ProductColorSale[];

  @Field(() => [ProductVideo])
  productVideos: ProductVideo[];

  @Field(() => [Product])
  products: Product[];

  @Field(() => [Subproduct])
  subproducts: Subproduct[];

  @Field(() => [TorobProduct])
  torobProducts: TorobProduct[];
}
