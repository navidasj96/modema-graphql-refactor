import { AttributeGroupPure } from '@/modules/attribute-group/domain/attribute-group.pure';
import { AttributeProductPure } from '@/modules/attribute-product/domain/attribute-product.pure';
import { AttributeSubproductPure } from '@/modules/attribute-subproduct/domain/attribute-subproduct.pure';
import { AttributePure } from '@/modules/attribute/domain/attribute.pure';
import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType('AttributeItemPureDomain')
@ObjectType()
export class AttributeItemPure {
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

  @Field(() => AttributeGroupPure)
  attributeGroup: AttributeGroupPure;

  @Field(() => AttributePure)
  attribute: AttributePure;

  @Field(() => [AttributeProductPure])
  attributeProducts: AttributeProductPure[];

  @Field(() => [AttributeSubproductPure])
  attributeSubproducts: AttributeSubproductPure[];
}
