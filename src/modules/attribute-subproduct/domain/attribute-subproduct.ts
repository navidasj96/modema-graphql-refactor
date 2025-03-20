import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { Attribute } from '@/modules/attribute/domain/attribute';
import { AttributeItem } from '@/modules/attribute-item/domain/attribute-item';
import { Subproduct } from '@/modules/subproduct/domain/subproduct';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType()
@InputType('AttributeSubproductDomain')
export class AttributeSubproduct {
  @IDField(() => ID)
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
