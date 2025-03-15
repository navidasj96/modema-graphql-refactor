import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
