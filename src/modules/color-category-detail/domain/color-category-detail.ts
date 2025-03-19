import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ColorCategory } from '@/modules/color-category/domain/color-category';

@ObjectType()
export class ColorCategoryDetail {
  @IDField(() => ID)
  id: number;

  @Field({ nullable: true })
  colorCategoryId?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  detailText?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  titleEn?: string;

  @Field({ nullable: true })
  detailTextEn?: string;

  @Field(() => ColorCategory)
  colorCategory: ColorCategory;
}
