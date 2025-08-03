import { ColorCategoryPure } from '@/modules/color-category/domain/color-category.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ColorCategoryDetailPureDomain')
@ObjectType()
export class ColorCategoryDetailPure {
  @Field(() => ID)
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

  @Field(() => ColorCategoryPure)
  colorCategory: ColorCategoryPure;
}
