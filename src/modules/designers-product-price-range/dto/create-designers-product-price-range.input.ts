import { Field, InputType } from '@nestjs/graphql';
import { BasicCarpetSize } from '@/modules/basic-carpet-size/domain/basic-carpet-size';

@InputType()
export class CreateDesignersProductPriceRangeInput {
  @Field()
  id: number;

  @Field()
  basicCarpetSizeId: number;

  @Field()
  minPrice: number;

  @Field()
  maxPrice: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => BasicCarpetSize)
  basicCarpetSize: BasicCarpetSize;
}
