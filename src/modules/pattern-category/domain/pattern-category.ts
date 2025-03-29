import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Image } from '@/modules/image/domain/image';
import { Pattern } from '@/modules/pattern/domain/pattern';

@InputType('PatternCategoryDomain')
@ObjectType()
export class PatternCategory {
  @IDField(() => ID)
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

  @Field(() => Image, { nullable: true })
  image?: Image;

  @Field(() => [Pattern])
  patterns: Pattern[];
}
