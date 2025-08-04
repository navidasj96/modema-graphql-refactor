import { DesignPure } from '@/modules/design/domain/design.pure';
import { PatternPure } from '@/modules/pattern/domain/pattern.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PatternLayerPureDomain')
@ObjectType()
export class PatternLayerPure {
  @Field(() => ID)
  id: number;

  @Field()
  designId: number;

  @Field()
  centerX: number;

  @Field()
  centerY: number;

  @Field()
  scaleX: number;

  @Field()
  scaleY: number;

  @Field()
  sortOrder: number;

  @Field()
  rotation: number;

  @Field()
  repeat: number;

  @Field()
  patternId: number;

  @Field()
  filename: string;

  @Field()
  path: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => DesignPure)
  design: DesignPure;

  @Field(() => PatternPure)
  pattern: PatternPure;
}
