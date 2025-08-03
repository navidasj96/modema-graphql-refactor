import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ImageSizePureDomain')
@ObjectType()
export class ImageSizePure {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  shortName: string;

  @Field()
  width: number;

  @Field()
  height: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [ProductCategoryPure])
  productCategories: ProductCategoryPure[];
}
