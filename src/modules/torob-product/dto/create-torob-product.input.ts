import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTorobProductInput {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  sizeTitle?: string;

  @Field({ nullable: true })
  colorTitle?: string;

  @Field({ nullable: true })
  torobCategory?: string;

  @Field({ nullable: true })
  basicCarpetSizeId?: number;

  @Field({ nullable: true })
  basicCarpetColorId?: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  deletedAt?: Date;
}
