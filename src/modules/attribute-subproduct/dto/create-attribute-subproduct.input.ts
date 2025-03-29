import { Field, InputType } from '@nestjs/graphql';
import { Attribute } from '@/modules/attribute/domain/attribute';
import { AttributeItem } from '@/modules/attribute-item/domain/attribute-item';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';

@InputType('CreateAttributeSubproductInput')
export class CreateAttributeSubproductInput {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field()
  subproductId: number;

  @Field({ nullable: true })
  attributeItemId?: number;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  isChecked?: boolean;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => Attribute)
  attribute: Attribute;

  @Field(() => AttributeItem)
  attributeItem?: AttributeItem;

  @Field(() => Subproduct)
  subproduct: Subproduct;
}
