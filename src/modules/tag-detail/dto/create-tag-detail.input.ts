import { InputType, Int, Field } from '@nestjs/graphql';

@InputType('CreateTagDetailInput')
export class CreateTagDetailInput {
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
}
