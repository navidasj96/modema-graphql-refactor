import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Subcolor } from '@/modules/subcolor/domain/subcolor';

@ObjectType()
export class Color {
  @IDField(() => ID)
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
