import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateImageSubproductInput {
  @Field()
  id: number;

  @Field()
  imageId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
