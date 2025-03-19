import { Field, InputType } from '@nestjs/graphql';
import { AttributeGroup } from '@/modules/attribute-group/entities/attribute-group.entity';
import { Attribute } from '@/modules/attribute/entities/attribute.entity';
import { AttributeProduct } from '@/modules/attribute-product/entities/attribute-product.entity';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/entities/attribute-subproduct.entity';

@InputType()
export class CreateAttributeItemInput {
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
