import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ColorCategory } from '@/modules/color-category/domain/color-category';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('ColorCategorySubproductDomain')
@ObjectType()
export class ColorCategorySubproduct {
  @IDField(() => ID)
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
