import { Field, InputType } from '@nestjs/graphql';
import { AttributeGroup } from '@/modules/attribute-group/domain/attribute-group';
import { Attribute } from '@/modules/attribute/domain/attribute';

@InputType('CreateAttributeAttributeGroupInput')
export class CreateAttributeAttributeGroupInput {
  @Field()
  id: number;

  @Field()
  attributeId: number;

  @Field()
  attributeGroupId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => AttributeGroup)
  attributeGroup: AttributeGroup;

  @Field(() => Attribute)
  attribute: Attribute;
}
