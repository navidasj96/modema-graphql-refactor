import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';

@InputType()
export class CreateSpecialOfferInput {
  @Field()
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

  @Field(() => Product, { nullable: true })
  specialOfferProduct?: Product;

  @Field(() => Product, { nullable: true })
  wonderfulOfferProduct?: Product;
}
