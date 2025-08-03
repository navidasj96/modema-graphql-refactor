import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { AttributeGroupPure } from '@/modules/attribute-group/domain/attribute-group.pure';
import { AttributePure } from '@/modules/attribute/domain/attribute.pure';

@InputType('AttributeAttributeGroupPureDomain')
@ObjectType()
export class AttributeAttributeGroupPure {
  @Field(() => ID)
  id: number;

  @Field()
  attributeId: number;

  @Field()
  attributeGroupId: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;

  @Field(() => [AttributeGroupPure])
  attributeGroup: [AttributeGroupPure];

  @Field(() => AttributePure)
  attribute: AttributePure;
}
