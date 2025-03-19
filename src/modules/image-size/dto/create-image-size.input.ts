import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';

@InputType()
export class CreateImageSizeInput {
  @Field()
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

  @Field(() => [ProductCategory])
  productCategories: ProductCategory[];
}
