import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class TmpSpanishName {
  @IDField(() => ID)
  name?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  nameEs?: string;

  @Field({ nullable: true })
  spanishTitle?: string;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  colorId?: number;
}
