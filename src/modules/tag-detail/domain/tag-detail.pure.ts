import { TagPure } from '@/modules/tag/domain/tag.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('TagDetailPureDomain')
@ObjectType()
export class TagDetailPure {
  @Field(() => ID)
  id: number;

  @Field(() => Number, { nullable: true })
  tagId: number | null;

  @Field(() => String, { nullable: true })
  title: string | null;

  @Field(() => String, { nullable: true })
  detailText: string | null;

  @Field(() => Number, { nullable: true })
  sortOrder: number | null;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Date, { nullable: true })
  createdAt: Date | null;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;

  @Field(() => String, { nullable: true })
  titleEn: string | null;

  @Field(() => String, { nullable: true })
  detailTextEn: string | null;

  @Field(() => TagPure, { nullable: true })
  tag: TagPure;
}
