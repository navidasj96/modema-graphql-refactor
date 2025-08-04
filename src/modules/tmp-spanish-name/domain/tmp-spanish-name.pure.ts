import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TmpSpanishNamePureDomain')
@ObjectType()
export class TmpSpanishNamePure {
  @Field(() => ID)
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
