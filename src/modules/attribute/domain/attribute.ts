import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { AttributeItem } from '@/modules/attribute-item/domain/attribute-item';
import { AttributeProduct } from '@/modules/attribute-product/domain/attribute-product';
import { AttributeSubproduct } from '@/modules/attribute-subproduct/domain/attribute-subproduct';
import { AttributeAttributeGroup } from '@/modules/attribute-attribute-group/domain/attribute-attribute-group';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('AttributeDomain')
@ObjectType()
export class Attribute {
  @IDField(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  type: number;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [AttributeAttributeGroup])
  attributeAttributeGroups: AttributeAttributeGroup[];

  @Field(() => [AttributeItem])
  attributeItems: AttributeItem[];

  @Field(() => [AttributeProduct])
  attributeProducts: AttributeProduct[];

  @Field(() => [AttributeSubproduct])
  attributeSubproducts: AttributeSubproduct[];
}
