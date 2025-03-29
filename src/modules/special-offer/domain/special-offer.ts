import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';
import { Product } from '@/modules/product/domain/product';

@InputType('SpecialOfferDomain')
@ObjectType()
export class SpecialOffer {
  @IDField(() => ID)
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
