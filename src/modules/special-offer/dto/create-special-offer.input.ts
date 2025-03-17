import { Field, InputType } from '@nestjs/graphql';

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
}
