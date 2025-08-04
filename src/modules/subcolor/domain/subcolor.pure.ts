import { ColorPure } from '@/modules/color/domain/color.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SubcolorPureDomain')
@ObjectType()
export class SubcolorPure {
  @Field(() => ID)
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

  @Field(() => ColorPure, { nullable: true })
  color?: ColorPure;
}
