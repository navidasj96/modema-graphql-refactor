import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { AttributePure } from '@/modules/attribute/domain/attribute.pure';
import { ProductPure } from '@/modules/product/domain/product.pure';
import { AttributeItemPure } from '@/modules/attribute-item/domain/attribute-item.pure';

@InputType('AttributeProductPureDomain')
@ObjectType()
export class AttributeProductPure {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  attributeId: number;

  @Field({ nullable: true })
  attributeItemId?: number;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  isChecked?: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => AttributePure)
  attribute: AttributePure;

  @Field(() => AttributeItemPure)
  attributeItem?: AttributeItemPure;

  @Field(() => ProductPure)
  product: ProductPure;
}
