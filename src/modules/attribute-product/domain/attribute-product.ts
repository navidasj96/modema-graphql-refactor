import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeProduct {
  @Field()
  id: number;

  @Field()
  productId: number;

  @Field()
  attributeId: number;

  @Field({ nullable: true })
  attributeItemId?: number;

  @Field({ nullable: true })
  value?: string;

  @Field({ nullable: true })
  isChecked?: boolean;

  @Field({ nullable: true })
  sortOrder?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
