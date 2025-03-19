import { Field, ObjectType } from '@nestjs/graphql';
import { AttributeGroup } from '@/modules/attribute-group/domain/attribute-group';
import { Attribute } from '@/modules/attribute/domain/attribute';
import { AttributeProduct } from '@/modules/attribute-product/domain/attribute-product';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/domain/attribute-subproduct';

@ObjectType()
export class AttributeItem {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field({ nullable: true })
  attributeGroupId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => AttributeGroup)
  attributeGroup: AttributeGroup;

  @Field(() => Attribute)
  attribute: Attribute;

  @Field(() => [AttributeProduct])
  attributeProducts: AttributeProduct[];

  @Field(() => [AttributeSubproduct])
  attributeSubproducts: AttributeSubproduct[];
}
