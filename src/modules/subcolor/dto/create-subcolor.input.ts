import { Field, InputType } from '@nestjs/graphql';
import { Color } from '@/modules/color/domain/color';

@InputType()
export class CreateSubcolorInput {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  hexCode?: string;

  @Field({ nullable: true })
  colorId?: number;

  @Field({ nullable: true })
  order?: number;

  @Field({ nullable: true })
  colorCodeOriginal?: string;

  @Field(() => Color, { nullable: true })
  color?: Color;
}
