import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAttributeSubproductInput {
  @Field()
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
}
