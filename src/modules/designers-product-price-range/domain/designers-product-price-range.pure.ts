import { BasicCarpetSizePure } from '@/modules/basic-carpet-size/domain/basic-carpet-size.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('DesignersProductPriceRangePureDomain')
@ObjectType()
export class DesignersProductPriceRangePure {
  @Field(() => ID)
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

  @Field(() => BasicCarpetSizePure)
  basicCarpetSize: BasicCarpetSizePure;
}
