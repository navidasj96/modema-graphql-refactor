import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBasicCarpetColorInput {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  code: string;

  @Field({ nullable: true })
  shortCode?: string;

  @Field({ nullable: true })
  colorCode?: string;

  @Field({ nullable: true })
  russianTitle?: string;

  @Field({ nullable: true })
  persianTitle?: string;

  @Field({ nullable: true })
  englishTitle?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: new Date() })
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  spanishTitle?: string;
}
