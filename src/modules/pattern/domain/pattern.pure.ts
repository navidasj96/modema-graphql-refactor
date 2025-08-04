import { PatternCategoryPure } from '@/modules/pattern-category/domain/pattern-category.pure';
import { PatternLayerPure } from '@/modules/pattern-layer/domain/pattern-layer.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PatternPureDomain')
@ObjectType()
export class PatternPure {
  @Field(() => ID)
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

  @Field(() => [PatternLayerPure])
  patternLayers: PatternLayerPure[];

  @Field(() => PatternCategoryPure)
  patternCategory: PatternCategoryPure;
}
