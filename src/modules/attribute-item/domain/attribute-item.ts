import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeItem {
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
}
