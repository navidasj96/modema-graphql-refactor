import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePatternCategoryInput {
  @Field()
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
