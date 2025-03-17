import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRecommendedSubproductInput {
  @Field()
  id: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
