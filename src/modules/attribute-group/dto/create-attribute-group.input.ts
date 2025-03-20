import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@/modules/product-category/domain/product-category';
import { AttributeItem } from '@/modules/attribute-item/domain/attribute-item';
import { AttributeAttributeGroup } from '@/modules/attribute-attribute-group/domain/attribute-attribute-group';

@InputType('CreateAttributeGroupInput')
export class CreateAttributeGroupInput {
  @Field()
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

  @Field(() => [AttributeAttributeGroup])
  attributeAttributeGroups: AttributeAttributeGroup[];

  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @Field(() => [AttributeItem])
  attributeItems: AttributeItem[];
}
