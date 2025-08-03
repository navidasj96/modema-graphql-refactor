import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { AttributeAttributeGroupPure } from '@/modules/attribute-attribute-group/domain/attribute-attribute-group.pure';
import { ProductCategoryPure } from '@/modules/product-category/domain/product-category.pure';
import { AttributeItemPure } from '@/modules/attribute-item/domain/attribute-item.pure';

@InputType('AttributeGroupPureDomain')
@ObjectType()
export class AttributeGroupPure {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  productCategoryId?: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  generalName?: string;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  isActive?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [AttributeAttributeGroupPure])
  attributeAttributeGroups: AttributeAttributeGroupPure[];

  @Field(() => ProductCategoryPure)
  productCategory: ProductCategoryPure;

  @Field(() => [AttributeItemPure])
  attributeItems: AttributeItemPure[];
}
