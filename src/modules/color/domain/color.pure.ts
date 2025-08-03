import { SubcolorPure } from '@/modules/subcolor/domain/subcolor.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ColorPureDomain')
@ObjectType()
export class ColorPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  hexCode?: string;

  @Field({ nullable: true })
  colorCodeOriginal?: string;

  @Field(() => [SubcolorPure])
  subcolors: SubcolorPure[];
}
