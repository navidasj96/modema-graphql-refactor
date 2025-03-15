import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

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
}
