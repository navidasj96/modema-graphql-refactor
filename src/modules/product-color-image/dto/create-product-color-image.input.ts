import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductColorImageInput {
  @Field()
  id: number;

  @Field()
  imageId: number;

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
