import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CouponSubject } from '@/modules/coupon-subject/domain/coupon-subject';
import { DiscountSubject } from '@/modules/discount-subject/domain/discount-subject';
import { Image } from '@/modules/image/domain/image';
import { ImageSize } from '@/modules/image-size/domain/image-size';
import { ProductCategoryRate } from '@/modules/product-category-rate/domain/product-category-rate';
import { ProductProductCategory } from '@/modules/product-product-category/domain/product-product-category';
import { AttributeGroup } from '@/modules/attribute-group/domain/attribute-group';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ProductCategory {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  parentId?: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field({ nullable: true })
  mobileImageId?: number;

  @Field({ nullable: true })
  homepageImageId?: number;

  @Field()
  showOnHomepage: boolean;

  @Field({ nullable: true })
  imageSizeId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  searchName?: string;

  @Field({ nullable: true })
  hierarchyCode?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  metaTags?: string;

  @Field({ nullable: true })
  pageTitle?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  pageTitleSingleSize?: string;

  @Field({ nullable: true })
  descriptionSingleSize?: string;

  @Field({ nullable: true })
  metaTagsSingleSize?: string;

  @Field({ nullable: true })
  urlSlug?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  nameEn?: string;

  @Field({ nullable: true })
  searchNameEn?: string;

  @Field({ nullable: true })
  metaTagsEn?: string;

  @Field({ nullable: true })
  pageTitleEn?: string;

  @Field({ nullable: true })
  descriptionEn?: string;

  @Field({ nullable: true })
  urlSlugEn?: string;

  @Field(() => [AttributeGroup])
  attributeGroups: AttributeGroup[];

  @Field(() => [CouponSubject])
  couponSubjects: CouponSubject[];

  @Field(() => [DiscountSubject])
  discountSubjects: DiscountSubject[];

  @Field(() => Image)
  homepageImage: Image;

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => ImageSize, { nullable: true })
  imageSize?: ImageSize;

  @Field(() => Image)
  mobileImage: Image;

  @Field(() => ProductCategory, { nullable: true })
  parent?: ProductCategory;

  @Field(() => [ProductCategory])
  productCategories: ProductCategory[];

  @Field(() => [ProductCategoryRate])
  productCategoryRates: ProductCategoryRate[];

  @Field(() => [ProductProductCategory])
  productProductCategories: ProductProductCategory[];
}
