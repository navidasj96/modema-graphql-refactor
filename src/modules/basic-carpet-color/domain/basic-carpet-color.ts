import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class BasicCarpetColor {
  @IDField(() => ID)
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
