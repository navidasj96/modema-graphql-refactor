import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Attribute } from '@/modules/attribute/domain/attribute';
import { Product } from '@/modules/product/domain/product';
import { AttributeItem } from '@/modules/attribute-item/domain/attribute-item';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('AttributeProductDomain')
@ObjectType()
export class AttributeProduct {
  @IDField(() => ID)
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

  @Field(() => Attribute)
  attribute: Attribute;

  @Field(() => AttributeItem)
  attributeItem?: AttributeItem;

  @Field(() => Product)
  product: Product;
}
