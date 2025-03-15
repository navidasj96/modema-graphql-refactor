import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AttributeGroup {
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
}
