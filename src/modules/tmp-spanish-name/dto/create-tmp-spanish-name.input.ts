import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTmpSpanishNameInput {
  @Field({ nullable: true })
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
