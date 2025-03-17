import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductVideoInput {
  @Field()
  id: number;

  @Field()
  videoId: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
