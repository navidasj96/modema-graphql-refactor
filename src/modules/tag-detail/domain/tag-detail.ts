import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from '@/modules/tag/entities/tag.entity';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { ID, InputType, ObjectType, Field } from '@nestjs/graphql';

@InputType('TagDetailDomain')
@ObjectType()
export class TagDetail {
  @IDField(() => ID)
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

  @Field(() => Tag, { nullable: true })
  tag: Tag;
}
