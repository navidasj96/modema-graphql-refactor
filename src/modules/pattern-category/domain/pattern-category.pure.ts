import { ImagePure } from '@/modules/image/domain/image.pure';
import { PatternPure } from '@/modules/pattern/domain/pattern.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('PatternCategoryPureDomain')
@ObjectType()
export class PatternCategoryPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  imageId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  viewCounter?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ImagePure, { nullable: true })
  image?: ImagePure;

  @Field(() => [PatternPure])
  patterns: PatternPure[];
}
