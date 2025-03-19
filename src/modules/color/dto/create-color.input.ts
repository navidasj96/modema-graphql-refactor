import { Field, InputType } from '@nestjs/graphql';
import { Subcolor } from '@/modules/subcolor/domain/subcolor';

@InputType()
export class CreateColorInput {
  @Field()
  id: number;

  @Field({ nullable: true })
  colorName?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  hexCode?: string;

  @Field({ nullable: true })
  colorCodeOriginal?: string;

  @Field(() => [Subcolor])
  subcolors: Subcolor[];
}
