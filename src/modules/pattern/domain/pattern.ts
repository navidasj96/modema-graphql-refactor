import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { PatternLayer } from '@/modules/pattern-layer/domain/pattern-layer';
import { PatternCategory } from '@/modules/pattern-category/domain/pattern-category';

@InputType('PatternDomain')
@ObjectType()
export class Pattern {
  @IDField(() => ID)
  id: number;

  @Field()
  patternCategoryId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  keywords?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  filename?: string;

  @Field({ nullable: true })
  thumbnailFilename?: string;

  @Field({ nullable: true })
  mime?: string;

  @Field({ nullable: true })
  originalFilename?: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [PatternLayer])
  patternLayers: PatternLayer[];

  @Field(() => PatternCategory)
  patternCategory: PatternCategory;
}
