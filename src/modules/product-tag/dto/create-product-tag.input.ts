import { Field, InputType } from '@nestjs/graphql';
import { Product } from '@/modules/product/domain/product';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { Tag } from '@/modules/tag/domain/tag';

@InputType('CreateProductTagInput')
export class CreateProductTagInput {
  @Field()
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

  @Field(() => Product)
  product: Product;

  @Field(() => Subproduct, { nullable: true })
  subproduct?: Subproduct;

  @Field(() => Tag)
  tag: Tag;
}
