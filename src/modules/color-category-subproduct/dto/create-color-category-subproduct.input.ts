import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateColorCategorySubproductInput {
  @Field()
  id: number;

  @Field()
  colorCategoryId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
