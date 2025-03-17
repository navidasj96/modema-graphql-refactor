import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class Subcolor {
  @IDField(() => ID)
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
}
