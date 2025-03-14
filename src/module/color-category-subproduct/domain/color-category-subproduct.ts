import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
export class ColorCategorySubproduct {
  @IDField(() => ID)
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
