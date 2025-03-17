import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserCartInput {
  @Field()
  id: number;

  @Field()
  userId: number;

  @Field({ nullable: true })
  productId?: number;

  @Field({ nullable: true })
  subproductId?: number;

  @Field({ nullable: true })
  designId?: number;

  @Field()
  count: number;

  @Field()
  bundleCount: number;

  @Field({ nullable: true })
  width?: number;

  @Field({ nullable: true })
  length?: number;

  @Field()
  withPad: boolean;

  @Field({ nullable: true })
  relatedProductId?: number;

  @Field({ nullable: true })
  relatedSubproductId?: number;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}
