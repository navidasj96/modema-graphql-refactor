import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttributeItemInput {
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
