import { AttributeGroupPure } from '@/modules/attribute-group/domain/attribute-group.pure';
import { CouponSubjectPure } from '@/modules/coupon-subject/domain/coupon-subject.pure';
import { DiscountSubjectPure } from '@/modules/discount-subject/domain/discount-subject.pure';
import { ImageSizePure } from '@/modules/image-size/domain/image-size.pure';
import { ImagePure } from '@/modules/image/domain/image.pure';
import { ProductCategoryRatePure } from '@/modules/product-category-rate/domain/product-category-rate.pure';
import { ProductProductCategoryPure } from '@/modules/product-product-category/domain/product-product-category.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductCategoryPureDomain')
@ObjectType()
export class ProductCategoryPure {
  @Field(() => ID)
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

  @Field(() => [AttributeGroupPure])
  attributeGroups: AttributeGroupPure[];

  @Field(() => [CouponSubjectPure])
  couponSubjects: CouponSubjectPure[];

  @Field(() => [DiscountSubjectPure])
  discountSubjects: DiscountSubjectPure[];

  @Field(() => ImagePure)
  homepageImage: ImagePure;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => ImageSizePure, { nullable: true })
  imageSize?: ImageSizePure;

  @Field(() => ImagePure)
  mobileImage: ImagePure;

  @Field(() => ProductCategoryPure, { nullable: true })
  parent?: ProductCategoryPure;

  @Field(() => [ProductCategoryPure])
  productCategories: ProductCategoryPure[];

  @Field(() => [ProductCategoryRatePure])
  productCategoryRates: ProductCategoryRatePure[];

  @Field(() => [ProductProductCategoryPure])
  productProductCategories: ProductProductCategoryPure[];
}
