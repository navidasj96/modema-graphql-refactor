import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSubproductSpecialImageInput {
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
