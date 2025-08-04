import { ProductPure } from '@/modules/product/domain/product.pure';
import { SubproductPure } from '@/modules/subproduct/domain/subproduct.pure';
import { TagPure } from '@/modules/tag/domain/tag.pure';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@InputType('ProductTagPureDomain')
@ObjectType()
export class ProductTagPure {
  @Field(() => ID)
  id: number;

  @Field()
  productId: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field()
  tagId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => ProductPure)
  product: ProductPure;

  @Field(() => SubproductPure, { nullable: true })
  subproduct?: SubproductPure;

  @Field(() => TagPure)
  tag: TagPure;
}
