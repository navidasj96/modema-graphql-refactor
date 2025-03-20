import { Field, InputType } from '@nestjs/graphql';
import { ColorCategory } from '@/modules/color-category/domain/color-category';

@InputType('CreateColorCategoryDetailInput')
export class CreateColorCategoryDetailInput {
  @Field()
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
