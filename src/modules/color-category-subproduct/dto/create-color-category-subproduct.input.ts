import { Field, InputType } from '@nestjs/graphql';
import { ColorCategory } from '@/modules/color-category/domain/color-category';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType()
export class CreateColorCategorySubproductInput {
  @Field()
  id: number;

  @Field()
  colorCategoryId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ColorCategory)
  colorCategory: ColorCategory;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
