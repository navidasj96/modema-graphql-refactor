import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductCategoryDetailPureDomain')
@ObjectType()
export class ProductCategoryDetailPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  detailText?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field()
  isActive: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field({ nullable: true })
  titleEn?: string;

  @Field({ nullable: true })
  detailTextEn?: string;
}
