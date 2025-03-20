import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { AttributeGroup } from '@/modules/attribute-group/domain/attribute-group';
import { Attribute } from '@/modules/attribute/domain/attribute';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@InputType('AttributeAttributeGroupDomain')
@ObjectType()
export class AttributeAttributeGroup {
  @IDField(() => ID)
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
