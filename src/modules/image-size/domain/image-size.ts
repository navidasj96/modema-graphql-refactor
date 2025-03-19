import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';

@InputType('ImageSize')
@ObjectType()
export class ImageSize {
  @IDField(() => ID)
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
