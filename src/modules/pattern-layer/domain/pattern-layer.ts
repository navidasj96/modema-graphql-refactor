import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Design } from '@/modules/design/domain/design';
import { Pattern } from '@/modules/pattern/domain/pattern';

@ObjectType()
export class PatternLayer {
  @IDField(() => ID)
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

  @Field(() => Design)
  design: Design;

  @Field(() => Pattern)
  pattern: Pattern;
}
