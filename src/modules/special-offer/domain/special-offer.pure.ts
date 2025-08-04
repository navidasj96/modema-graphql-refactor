import { ProductPure } from '@/modules/product/domain/product.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('SpecialOfferPureDomain')
@ObjectType()
export class SpecialOfferPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  specialOfferProductId?: number;

  @Field({ nullable: true })
  wonderfulOfferProductId?: number;

  @Field({ nullable: true })
  specialOfferTitle?: string;

  @Field({ nullable: true })
  specialOfferSubtitle?: string;

  @Field({ nullable: true })
  specialOfferImageUrl?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductPure, { nullable: true })
  specialOfferProduct?: ProductPure;

  @Field(() => ProductPure, { nullable: true })
  wonderfulOfferProduct?: ProductPure;
}
