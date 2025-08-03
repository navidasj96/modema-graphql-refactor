import { ColorCategoryPure } from '@/modules/color-category/domain/color-category.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ColorCategorySubproductPureDomain')
@ObjectType()
export class ColorCategorySubproductPure {
  @Field(() => ID)
  id: number;

  @Field()
  colorCategoryId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ColorCategoryPure)
  colorCategory: ColorCategoryPure;

  @Field(() => SubproductPure)
  subproduct: SubproductPure;
}
