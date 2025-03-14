import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeAttributeGroup {
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
}
