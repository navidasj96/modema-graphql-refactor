import { Field, InputType } from '@nestjs/graphql';

@InputType()
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
}
